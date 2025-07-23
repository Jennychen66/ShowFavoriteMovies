import { Suspense, lazy } from "react";

const LazyLoadComponent = lazy(() => import('../component/Lazyload')); 
function LazyLoad() {
  return (
    <div>
        <h1>Lazy Load Component</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadComponent />
        </Suspense>
    </div>
  );
}

export default LazyLoad;