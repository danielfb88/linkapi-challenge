interface IUser {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: object;
  active_flag: boolean;
  value: number;
}

interface IEmail {
  value: string;
  primary: boolean;
}

interface IPhone {
  label: string;
  value: string;
  primary: boolean;
}

interface IOrg {
  name: string;
  people_count: number;
  owner_id: number;
  address: string;
  active_flag: boolean;
  cc_email: string;
  value: number;
}

export interface IDataDeal {
  id: number;
  creator_user_id: IUser;
  user_id: IUser;
  person_id: {
    active_flag: boolean;
    name: string;
    email: IEmail[];
    phone: IPhone[];
    value: number;
  };
  org_id: IOrg;
  stage_id: number;
  title: string;
  value: number;
  currency: string;
  add_time: string;
  update_time: string;
  stage_change_time: object;
  active: boolean;
  deleted: boolean;
  status: string;
  probability: object;
  next_activity_date: object;
  next_activity_time: object;
  next_activity_id: object;
  last_activity_id: object;
  last_activity_date: object;
  lost_reason: object;
  visible_to: string;
  close_time: string;
  pipeline_id: number;
  won_time: string;
  first_won_time: string;
  lost_time: object;
  products_count: number;
  files_count: number;
  notes_count: number;
  followers_count: number;
  email_messages_count: number;
  activities_count: number;
  done_activities_count: number;
  undone_activities_count: number;
  participants_count: number;
  expected_close_date: string;
  last_incoming_mail_time: object;
  last_outgoing_mail_time: object;
  label: object;
  stage_order_nr: number;
  person_name: string;
  org_name: string;
  next_activity_subject: object;
  next_activity_type: object;
  next_activity_duration: object;
  next_activity_note: object;
  formatted_value: string;
  weighted_value: number;
  formatted_weighted_value: string;
  weighted_value_currency: string;
  rotten_time: object;
  owner_name: string;
  cc_email: string;
  org_hidden: boolean;
  person_hidden: boolean;
}

export interface IGetDealsResponse {
  success: boolean;
  data: IDataDeal[];
}
