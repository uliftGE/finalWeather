import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherDisplay />
    </QueryClientProvider>
  );
};

export default App;
