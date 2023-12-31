// 为了开发方便，导入时加上index可以及时响应变更，不需要build
import { IGlobalConfig } from '@eagle-tracker/types';
import eagle from './src/eagle';

function install(app: any, options: Partial<IGlobalConfig> = {}) {
  eagle.configInstance.set({
    ...options,
    famework: {
      vue: true,
      app,
    },
  });
  eagle.start();
  app.config.errorHandler = eagle.getVueErrorhandler();
}
export const EagleTracker = {
  install,
};
// 导出类型守卫
export {
  isJSError, isHttpError, isPromiseError, isVueError,
} from '@eagle-tracker/types';
// 导出生命周期
export * from './src/licfecycle';
export * from './src/behavior';
export * from './src/performance';
