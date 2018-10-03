using System.Web;
using System.Web.Optimization;

namespace Angular5CRUD
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/Styles").Include(
                      "~/Content/dist/styles.*"));

            bundles.Add(new ScriptBundle("~/Script/Bundles").Include(
                "~/Content/dist/inline.*",
                "~/Content/dist/polyfills.*",
                "~/Content/dist/scripts.*",
                "~/Content/dist/main.*"));
        }
    }
}
