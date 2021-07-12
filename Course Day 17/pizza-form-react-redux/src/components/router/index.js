import { lazy } from 'react'

const Step1 = lazy(() => import('../pages/Step1'))
const Step2 = lazy(() => import('../pages/Step2'))
const Step3 = lazy(() => import('../pages/Step3'))
const Step4 = lazy(() => import('../pages/Step4'))
const Result = lazy(() => import('../pages/Result'))

//NOTE: contains all the routes & notice the imports are not normal import statement we are fetching component using React.lazy or lazy making it available only when needed.

const routeList = [
    {
        path: '/',
        Component: Step1
    },
    {
        path: '/step2',
        Component: Step2
    },
    {
        path: '/step3',
        Component: Step3
    },
    {
        path: '/step4',
        Component: Step4
    },
    {
        path: '/result',
        Component: Result
    },
    {
        path: '*',
        Component: () => (<><h3>404, Not found!</h3></>)
    }
]

export default routeList