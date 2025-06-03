import { createBrowserRouter } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInical";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
  },
  /*
  
    {
    element: <NavBarLayout />,
    children: [
      {
        path: "/",
        element: <PaginaInicial />,
      },
    ],
  },


  /*{
    element: <CompradorNavBarLayout tipoUsuario={TiposUsuarios.COMPRADOR} />,
    children: [
      {
        path: "/paginacomprador",
        element: <PaginaComprador />,
      },
      {
        path: "/detalhes-do-evento-v1/:id",
        element: <EventDetailsV1 />,
      },
      {
        path: "/meustickets",
        element: <MeusTickets/>
      }
    ],
  },
  {
    element: (
      <NavBarLayoutOrganizador tipoUsuario={TiposUsuarios.ORGANIZADOR} />
    ),
    children: [
      {
        path: "/eventos-publicados",
        element: <PaginaPrincipalOrganizador />,
      },
      {
        path: "/novo-evento",
        element: <NovoEvento />,
      },
    ],
  },
  {
    element: (
      <NavBarLayoutOrganizador tipoUsuario={TiposUsuarios.ORGANIZADOR} />
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardGeral />,
      },
    ],
  },
  {
    element: <CheckoutNavBarLayout />,
    children: [
      {
        path: "/checkout",
        element: <CheckoutStepper></CheckoutStepper>,
      },
    ],
  },
  {
    element: <LoginNavBar />,
    children: [
      {
        path: "/login",
        element: <LoginClientPage />,
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ],
  },*/
]);

export default router;
