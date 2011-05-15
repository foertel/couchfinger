function (doc, req) {
  if (doc != null && doc.doctype == 'account') {
    // !json templates.xrd
    var mustache = require('vendor/couchapp/lib/mustache');

    return mustache.to_html(templates.xrd, doc);
  }
}