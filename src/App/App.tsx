import { Routes } from "./routes/index";
import { UserLogProvider } from "./shared/contexts";
export const App = () => {
  return (
    <UserLogProvider>
      <Routes />
   </UserLogProvider>
  );
}

