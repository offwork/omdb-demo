import { AppProvideApiService } from './app-provide-api.service';

export function startupServiceFactory(
  appApiService: AppProvideApiService
): Function {
  return () => appApiService.load();
}
