using System.Web;
using System.Web.Optimization;

namespace Stock
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/CSS")
                .IncludeDirectory("~/Content/css", "*.css"));

            bundles.Add(new ScriptBundle("~/bundles/RestaurantApp")
                .Include("~/Scripts/RestaurantApp.js"));

            bundles.Add(new ScriptBundle("~/bundles/RestaurantAppControllers")
                .IncludeDirectory("~/Scripts/Controllers", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/RestaurantAppServices")
                .IncludeDirectory("~/Scripts/Services", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/RestaurantAppLibs")
                .IncludeDirectory("~/Scripts/lib", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/Bpopup")
                .Include("~/Scripts/lib/bpopup.js"));

            bundles.Add(new ScriptBundle("~/bundles/JQuery")
                .Include("~/Scripts/lib/jquery-1.11.3.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/Blocker")
                .Include("~/Scripts/lib/blocker.js"));
        }
    }
}
