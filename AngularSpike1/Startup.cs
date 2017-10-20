using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularSpike1.Startup))]
namespace AngularSpike1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
