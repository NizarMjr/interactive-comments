"use client"
import App from "@/components/App";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {

  return (
    <Provider store={store}>
      <App />
    </Provider>

  )
}