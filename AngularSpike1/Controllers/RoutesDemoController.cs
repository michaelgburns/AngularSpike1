using System.Web.Mvc;

namespace AngularSpike1.Controllers
{
    public class RoutesDemoController : Controller
    {
        // GET: RoutesDemo/One
        public ActionResult One()
        {
            return View();
        }

        public ActionResult Two(int donuts = 1)
        {
            ViewBag.Donuts = donuts;
            return View();
        }
       
        public ActionResult Three()
        {
            return View();
        }
    }
}