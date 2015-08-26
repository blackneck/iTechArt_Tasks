using System.Web;
using System.Web.Optimization;

namespace Stock
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bpopup").Include(
                        "~/Scripts/bpopup.js"));

            bundles.Add(new ScriptBundle("~/bundles/blocker").Include(
                        "~/Scripts/blocker.js"));

            bundles.Add(new ScriptBundle("~/bundles/restaurantApp").Include(
                        "~/Scripts/RestaurantApp.js"));

            bundles.Add(new ScriptBundle("~/bundles/controllers").IncludeDirectory(
                        "~/Scripts/Controllers", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/services").IncludeDirectory(
                        "~/Scripts/Services", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css", "~/Content/css/Site.css"));
        }
    }
}
