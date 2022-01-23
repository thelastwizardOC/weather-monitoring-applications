import HomePage from '../containers/HomePage';
import ReportPage from '../containers/ReportPage';
import LookUpPage from '../containers/LookUpPage';
import InformationPage from '../containers/InformationPage';
import SuggestionPage from '../containers/SuggestionPage';

export const ROUTES = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: 'Report',
    path: '/report',
    exact: true,
    component: ReportPage,
  },
  {
    name: 'Look up',
    path: '/lookup',
    exact: true,
    component: LookUpPage,
  },
  {
    name: 'Information',
    path: '/information',
    exact: true,
    component: InformationPage,
  },
  {
    name: 'Suggestion',
    path: '/suggestion',
    exact: true,
    component: SuggestionPage,
  },
];