/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * record deletable
 * @example {"deletable":true,"message":"message"}
 */
export interface Deletable {
  deletable: boolean
  message?: string
}

/** @example {"disp_order":6,"manager_uid":0,"code":"code","search_key":"search_key","department_biid":"department_biid","valid_to":"2000-01-23T00:00:00.000Z","name":"name","valid_from":"2000-01-23T00:00:00.000Z","biid":"biid","tags":["tags","tags"]} */
export interface NewProjectRequest {
  biid?: string
  department_biid?: string
  code: string
  name: string
  search_key?: string
  /** @format date */
  valid_from: string
  /** @format date */
  valid_to?: string
  manager_uid?: number
  disp_order?: number
  tags?: string[]
}

/** @example {"disp_order":6,"manager_uid":0,"code":"code","search_key":"search_key","validate_department":true,"department_biid":"department_biid","valid_to":"2000-01-23T00:00:00.000Z","name":"name","valid_from":"2000-01-23T00:00:00.000Z","biid":"biid","tags":["tags","tags"]} */
export interface UpdateProjectRequest {
  validate_department?: boolean
  biid: string
  department_biid?: string | null
  code?: string | null
  name?: string | null
  search_key?: string | null
  /** @format date */
  valid_from: string
  /** @format date */
  valid_to?: string
  manager_uid?: number | null
  disp_order?: number
  tags?: string[]
}

/** @example {"disp_order":6,"manager_uid":0,"code":"code","latest_transaction_from":"2000-01-23T04:56:07.000Z","search_key":"search_key","validate_department":true,"department_biid":"department_biid","valid_to":"2000-01-23T00:00:00.000Z","name":"name","valid_from":"2000-01-23T00:00:00.000Z","tags":["tags","tags"]} */
export interface CreateHistoryProjectRequest {
  validate_department?: boolean
  department_biid?: string | null
  code?: string | null
  name?: string | null
  search_key?: string | null
  /** @format date */
  valid_from: string
  /** @format date */
  valid_to?: string
  /** @format date-time */
  latest_transaction_from: string
  manager_uid?: number | null
  disp_order?: number
  tags?: string[]
}

/** @example {"name":"name"} */
export interface NewTagRequest {
  name: string
}

/** @example {"name":"name","biid":"biid"} */
export interface UpdateTagRequest {
  biid: string
  name: string
}

export interface ImportCSVRequest {
  /** @format binary */
  project_csv?: File
}

/**
 * CreateTagsResponse
 * @example {"TransactionToBySrv":"TransactionToBySrv","TransactionFromBySrv":"TransactionFromBySrv","TenantUID":6,"Version":5,"TransactionToBy":5,"ID":0,"TransactionFromBy":1,"TransactionFrom":"TransactionFrom","Biid":"Biid","Name":"Name","TransactionTo":"TransactionTo"}
 */
export interface CreateTagsResponse {
  ID?: number
  Biid?: string
  TenantUID?: number
  Name?: string
  TransactionFrom?: string
  TransactionTo?: string
  TransactionFromBy?: number
  TransactionToBy?: number
  TransactionFromBySrv?: string
  TransactionToBySrv?: string
  Version?: number
}

/** Error */
export interface Error {
  /** @default "internal_error" */
  type: 'validation_failed' | 'invalid_credential' | 'permission_denied' | 'request_not_found' | 'internal_error'
  /** Custom error code */
  code: string
  /** Error Summary */
  title: string
  /** Detailed error description */
  detail: string
}

/**
 * page
 * @example {"page":{"number":4,"total":7,"size":2}}
 */
export interface Meta {
  /** page */
  page?: Page
}

/**
 * page
 * @example {"number":4,"total":7,"size":2}
 */
export interface Page {
  size: number
  number: number
  total: number
}

/**
 * project
 * @example {"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"}
 */
export interface Project {
  /**
   * ID
   * @format ulid
   */
  id?: string
  /** biid */
  biid?: string
  /** biid for department */
  department_biid?: string
  /** department name */
  department_name?: string
  /** department code */
  department_code?: string
  /** department is deleted */
  department_is_deleted?: boolean
  /** tenant uid */
  tenant_uid?: number
  /** manager uid */
  manager_uid?: number | null
  /** manager code */
  manager_code?: string
  /** manager name */
  manager_name?: string
  /** manager is deleted */
  manager_is_deleted?: boolean
  /** code of project */
  code?: string
  /** name of project */
  name?: string
  /** valid start date */
  valid_from?: string
  /** valid end date */
  valid_to?: string
  /** most first valid start date */
  first_valid_from?: string
  /** most latest valid end date */
  latest_valid_to?: string
  /** system created date */
  transaction_from?: string
  /** system deleted date */
  transaction_to?: string
  /** create tenant user uid */
  transaction_from_by?: number
  /** deleted tenant user uid */
  transaction_to_by?: number
  /** subsystem that performs the change */
  transaction_from_by_srv?: string
  /** subsystem that performs the change */
  transaction_to_by_srv?: string
  /** name that performs the change */
  transaction_from_by_name?: string
  /** name that performs the change */
  transaction_to_by_name?: string
  /** order seq */
  disp_order?: number
  /** search key from front end */
  search_key?: string
  /** record modify version */
  version?: number
  tags: Tag[]
}

/**
 * project_import
 * @example {"file_path":"file_path","tenant_uid":0,"total_errors":6,"file_name":"file_name","error_file_path":"error_file_path","import_status":"import_status","id":"id","created_by":1,"percent":5,"errors":"errors","created_by_srv":"created_by_srv"}
 */
export interface ProjectImport {
  /**
   * ID
   * @format ulid
   */
  id: string
  /** tenant uid */
  tenant_uid: number
  /** import file name */
  file_name: string
  /** import file path */
  file_path: string
  /** enum of import status */
  import_status: string
  /** error of count */
  total_errors: number
  /** errors */
  errors?: string
  /** error file path */
  error_file_path?: string
  /** created by */
  created_by: number
  /** created by srv */
  created_by_srv: string
  /** percent for process */
  percent?: number
}

/**
 * tag
 * @example {"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}
 */
export interface Tag {
  /**
   * ID
   * @format ulid
   */
  id?: string
  /** biid */
  biid: string
  /** tenant uid */
  tenant_uid?: number
  /** name of tag */
  name?: string
  /** system created date */
  transaction_from?: string
  /** system deleted date */
  transaction_to?: string
  /** create tenant user uid */
  transaction_from_by?: number
  /** deleted tenant user uid */
  transaction_to_by?: number
  /** subsystem that performs the change */
  transaction_from_by_srv?: string
  /** subsystem that performs the change */
  transaction_to_by_srv?: string
  /** tenant_user that performs the change */
  transaction_from_by_name?: string
  /** tenant_user that performs the change */
  transaction_to_by_name?: string
  /** using tag in project */
  can_delete?: boolean
}

/**
 * operation_log
 * @example {"tenant_uid":0,"trace_id":6,"operation_by_name":"operation_by_name","operation_by_srv":"operation_by_srv","projects":[{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"},{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"}],"operation_type":"operation_type","kind":"kind","operation_by":1,"created_at":"created_at","id":"id","tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"project_tags":[{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"},{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"}]}
 */
export interface OperationLog {
  /**
   * ID
   * @format ulid
   */
  id?: string
  /** tenant uid */
  tenant_uid?: number
  /** trace id */
  trace_id?: number
  /** kind */
  kind?: string
  /** operation_type */
  operation_type?: string
  /** trace id */
  operation_by?: number
  /** operation_type */
  operation_by_name?: string
  /** operation_by_srv */
  operation_by_srv?: string
  /**
   * created_at
   * @format datetime
   */
  created_at?: string
  projects?: Project[]
  tags?: Tag[]
  project_tags?: ProjectTag[]
}

/**
 * department
 * @example {"tenant_uid":0,"name":"name","biid":"biid"}
 */
export interface Department {
  /** biid */
  biid?: string
  /** tenant uid */
  tenant_uid?: number
  /** name of tag */
  name?: string
}

/**
 * manager
 * @example {"uid":0,"display_name":"display_name","employee_code":"employee_code"}
 */
export interface Manager {
  /** manager uid */
  uid?: number
  /** display name of manager */
  display_name?: string
  /** employee code */
  employee_code?: string
}

/**
 * all_data
 * @example {"projects":[{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"},{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"}],"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"project_tags":[{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"},{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"}]}
 */
export interface AllRecord {
  projects: Project[]
  tags: Tag[]
  project_tags: ProjectTag[]
}

/**
 * project_tag
 * @example {"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"}
 */
export interface ProjectTag {
  /**
   * ID
   * @format ulid
   */
  project_id?: string
  /** tenant uid */
  tenant_uid?: number
  /** biid */
  tag_biid?: string
}

/**
 * ProjectsResponse
 * @example {"data":[{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"},{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"}],"meta":{"page":{"number":4,"total":7,"size":2}}}
 */
export interface ProjectsResponse {
  data: Project[]
  /** page */
  meta?: Meta
}

/**
 * ListProjectsResponse
 * @example {"List":[{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"},{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"}]}
 */
export interface ListProjectsResponse {
  List?: Project[]
}

/**
 * ImportCSVResponse
 * @example {"job_id":"job_id"}
 */
export interface ImportCSVResponse {
  job_id?: string
}

/**
 * ListProjectsResponse
 * @example {"List":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}]}
 */
export interface ListProjectsResponse1 {
  List?: Tag[]
}

/**
 * ListTagsResponse
 * @example {"List":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}]}
 */
export interface ListTagsResponse {
  List?: Tag[]
}

/**
 * OperationLogResponse
 * @example {"data":[{"tenant_uid":0,"trace_id":6,"operation_by_name":"operation_by_name","operation_by_srv":"operation_by_srv","projects":[{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"},{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"}],"operation_type":"operation_type","kind":"kind","operation_by":1,"created_at":"created_at","id":"id","tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"project_tags":[{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"},{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"}]},{"tenant_uid":0,"trace_id":6,"operation_by_name":"operation_by_name","operation_by_srv":"operation_by_srv","projects":[{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"},{"department_code":"department_code","transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":1,"code":"code","department_is_deleted":true,"valid_from":"valid_from","biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","department_biid":"department_biid","manager_code":"manager_code","valid_to":"valid_to","latest_valid_to":"latest_valid_to","id":"id","manager_is_deleted":true,"disp_order":5,"manager_uid":6,"first_valid_from":"first_valid_from","search_key":"search_key","department_name":"department_name","version":2,"transaction_to_by":5,"tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"manager_name":"manager_name","transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":0,"name":"name","transaction_from":"transaction_from"}],"operation_type":"operation_type","kind":"kind","operation_by":1,"created_at":"created_at","id":"id","tags":[{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"},{"transaction_to":"transaction_to","transaction_from_by_srv":"transaction_from_by_srv","transaction_from_by":9,"biid":"biid","transaction_to_by_srv":"transaction_to_by_srv","transaction_to_by":3,"transaction_from_by_name":"transaction_from_by_name","transaction_to_by_name":"transaction_to_by_name","tenant_uid":7,"can_delete":true,"name":"name","transaction_from":"transaction_from","id":"id"}],"project_tags":[{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"},{"tenant_uid":5,"project_id":"project_id","tag_biid":"tag_biid"}]}]}
 */
export interface OperationLogResponse {
  data: OperationLog[]
}

/**
 * DepartmentsResponse
 * @example {"data":[{"tenant_uid":0,"name":"name","biid":"biid"},{"tenant_uid":0,"name":"name","biid":"biid"}]}
 */
export interface DepartmentsResponse {
  data: Department[]
}

/**
 * ManagersResponse
 * @example {"data":[{"uid":0,"display_name":"display_name","employee_code":"employee_code"},{"uid":0,"display_name":"display_name","employee_code":"employee_code"}],"total_count":5,"page":6,"total_pages":1}
 */
export interface ManagersResponse {
  data: Manager[]
  page?: number
  total_pages?: number
  total_count?: number
}
