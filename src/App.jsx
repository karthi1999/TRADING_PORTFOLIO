import React, { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

function App() {

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    </div>
  )
}

export default App
