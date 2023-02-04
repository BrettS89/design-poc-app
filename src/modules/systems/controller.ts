import api from '../../api';

export const fetchDesignSystems = (): Promise<any> => {
  return api.service('design/system').find({ query: {}, $limit: 100 });
};

export const createDesignSystem = (data: { name: string, description: string }): Promise<any> => {
  return api.service('design/system').create(data);
};
