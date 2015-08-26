using Stock.DAL;
using Stock.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stock.Controllers
{
    public class HomeController : Controller
    {
        //private StockContext db = new StockContext();
        private PizzaServiceContext db = new PizzaServiceContext();

        // GET: Home/GetVendors
        public ActionResult GetVendors()
        {
            return Json(db.Vendors.ToList(), JsonRequestBehavior.AllowGet);
        }

        // POST: Home/DeleteVendor
        [HttpPost]
        public void DeleteVendor(int id)
        {
            Vendor vendor = db.Vendors.Find(id);
            db.Vendors.Remove(vendor);
            db.SaveChanges();
        }

        // POST: Home/Create        
        [HttpPost]
        public void CreateVendor(Vendor vendor)
        {
            db.Vendors.Add(vendor);
            db.SaveChanges();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}