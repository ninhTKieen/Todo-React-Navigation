export const NOTIFICATION_TYPE = {
  APARTMENT: 1,
  GENERAL: 2,
};

export interface INotiGeneralData {
  id: number;
  countComment: number;
  countFollow: number;
  name: string;
  data: string;
  fileUrl?: any;
  type: 1 | 2;
  userId?: any;
  tenantId?: any;
  deleterUserId?: any;
  deletionTime?: any;
  isDeleted?: boolean;
  follow?: any;
  creationTime: string;
  creatorUserId: number;
}

export interface IUserCommentData {
  id: number;
  fullName: string;
  avatar: string;
  comment: string;
  isLike?: boolean;
  tenantId?: any;
  cityNotificationId: number;
  type: 1 | 2;
  isDeleted: boolean;
  deleterUserId: boolean;
  deletionTime?: any;
  lastModificationTime?: any;
  lastModifierUserId?: any;
  creationTime: string;
  creatorUserId: number;
}
