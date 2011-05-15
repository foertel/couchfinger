## couchfinger

couchfinger is an approach to implement [webfinger](http://code.google.com/p/webfinger/) in JavaScript, using [CouchDB](http://couchdb.apache.org/) and [jQuery](http://jquery.com/). The latest (or even later) version of couchfinger is running on [webfingerd](http://webfingerd.com/), a free, hosted webfinger service.

## use couchfinger

### install

Most likely you want to use [CouchApp](http://couchapp.org) to deploy couchfinger.

	git clone git://github.com/foertel/couchfinger.git
	couchapp push couchapp http://your.couch.db/your-database

Using this way of deployment, you can make changes to the code and push them to your database easily.

If you want to go the short way, just put the content of couchfinger.json in your-database/_design/couchfinger.

### configure

Most likely you want to configure a [virtual host](http://wiki.apache.org/couchdb/Virtual_Hosts) in your CouchDB to point to your-database/\_design/couchfinger/\_rewrite. This gives you two redirects:

	/ -> index.html (welcome message and later the app for registering)
	/webfinger/{uri} -> webfinger resource

If you do not want to use a virtual host (which you do!) you can use /your-database/\_design/couchfinger/\_rewrite/webfinger/{uri}. Using /your-database/\_design/couchfinger/\_show/webfinger/{uri} is highly discouraged as this may change without prior notice.

### promote

webfinger uses the user@hostname.tld schema as identifier for accounts. The host given after the @ has to promote where the webfinger service can be found. To use couchfinger with your own domain, just place the following in /.well-known/host-meta

	<?xml version='1.0' encoding='UTF-8'?>
		<XRD xmlns='http://docs.oasis-open.org/ns/xri/xrd-1.0' xmlns:hm='http://host-meta.net/xrd/1.0'>
			<hm:Host xmlns='http://host-meta.net/xrd/1.0'>hostname.tld</hm:Host>
			<Link rel='lrdd' template='http://your.couch.db/webfinger/{uri}'>
				<Title>Resource Descriptor</Title>
			</Link>
		</XRD>