import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <label>Hello world!</label>,
    },
]);

export function Provider (){
  return <RouterProvider router={router} />
}