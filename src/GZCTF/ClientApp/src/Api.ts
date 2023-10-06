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

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios'
import axios from 'axios'
import useSWR, { MutatorOptions, SWRConfiguration, mutate } from 'swr'

export interface RequestResponseOfRegisterStatus {
  title?: string
  data?: RegisterStatus
  /** @format int32 */
  status?: number
}

export enum RegisterStatus {
  LoggedIn = 'LoggedIn',
  AdminConfirmationRequired = 'AdminConfirmationRequired',
  EmailConfirmationRequired = 'EmailConfirmationRequired',
}

export interface RequestResponse {
  title?: string
  /** @format int32 */
  status?: number
}

export type RegisterModel = ModelWithCaptcha & {
  /**
   * @minLength 3
   * @maxLength 15
   */
  userName: string
  /** @minLength 6 */
  password: string
  /**
   * @format email
   * @minLength 1
   */
  email: string
  /** @minLength 1 */
  realName: string
  /**
   * @format phone
   * @minLength 1
   */
  phoneNumber: string
  /**
   * @minLength 0
   * @maxLength 9
   */
  stdNumber: string
  /** @minLength 1 */
  qqNumber: string
}

export interface ModelWithCaptcha {
  challenge?: string | null
}

export type RecoveryModel = ModelWithCaptcha & {
  /**
   * @format email
   * @minLength 1
   */
  email: string
}

export interface PasswordResetModel {
  /** @minLength 6 */
  password: string
  /** @minLength 1 */
  email: string
  /** @minLength 1 */
  rToken: string
}

export interface AccountVerifyModel {
  /** @minLength 1 */
  token: string
  /** @minLength 1 */
  email: string
}

export type LoginModel = ModelWithCaptcha & {
  /** @minLength 1 */
  userName: string
  /** @minLength 6 */
  password: string
}

export interface ProfileUpdateModel {
  /**
   * @minLength 3
   * @maxLength 15
   */
  userName?: string | null
  /** @maxLength 55 */
  bio?: string | null
  /** @format phone */
  phone?: string | null
  /** @maxLength 7 */
  realName?: string | null
  /** @maxLength 24 */
  stdNumber?: string | null
  /** @maxLength 11 */
  qqNumber?: string | null
}

export interface PasswordChangeModel {
  /** @minLength 6 */
  old: string
  /** @minLength 6 */
  new: string
}

export interface RequestResponseOfBoolean {
  title?: string
  data?: boolean
  /** @format int32 */
  status?: number
}

export interface MailChangeModel {
  /**
   * @format email
   * @minLength 1
   */
  newMail: string
}

export interface ProfileUserInfoModel {
  userId?: string | null
  userName?: string | null
  email?: string | null
  bio?: string | null
  phone?: string | null
  realName?: string | null
  stdNumber?: string | null
  qqNumber?: string | null
  avatar?: string | null
  role?: Role | null
}

export enum Role {
  Banned = 'Banned',
  User = 'User',
  Monitor = 'Monitor',
  Admin = 'Admin',
}

export interface ConfigEditModel {
  accountPolicy?: AccountPolicy | null
  globalConfig?: GlobalConfig | null
  gamePolicy?: GamePolicy | null
}

export interface AccountPolicy {
  allowRegister?: boolean
  activeOnRegister?: boolean
  useCaptcha?: boolean
  emailConfirmationRequired?: boolean
  emailDomainList?: string
}

export interface GlobalConfig {
  title?: string
  slogan?: string
  footerInfo?: string | null
}

export interface GamePolicy {
  autoDestroyOnLimitReached?: boolean
}

export interface ArrayResponseOfUserInfoModel {
  data: UserInfoModel[]
  /** @format int32 */
  length: number
  /** @format int32 */
  total?: number
}

export interface UserInfoModel {
  id?: string | null
  userName?: string | null
  realName?: string | null
  stdNumber?: string | null
  phone?: string | null
  qqNumber?: string | null
  bio?: string | null
  /** @format date-time */
  registerTimeUTC?: string
  /** @format date-time */
  lastVisitedUTC?: string
  ip?: string
  email?: string | null
  avatar?: string | null
  role?: Role | null
  emailConfirmed?: boolean | null
}

export interface UserCreateModel {
  /**
   * @minLength 3
   * @maxLength 15
   */
  userName: string
  /** @minLength 6 */
  password: string
  /**
   * @format email
   * @minLength 1
   */
  email: string
  /** @maxLength 7 */
  realName?: string | null
  /** @maxLength 15 */
  stdNumber?: string | null
  /** @maxLength 11 */
  qqNumber?: string | null
  /** @format phone */
  phone?: string | null
  /** @maxLength 15 */
  teamName?: string | null
}

export interface ArrayResponseOfTeamInfoModel {
  data: TeamInfoModel[]
  /** @format int32 */
  length: number
  /** @format int32 */
  total?: number
}

export interface TeamInfoModel {
  /** @format int32 */
  id?: number
  name?: string | null
  bio?: string | null
  avatar?: string | null
  locked?: boolean
  members?: TeamUserInfoModel[] | null
}

export interface TeamUserInfoModel {
  id?: string | null
  userName?: string | null
  bio?: string | null
  avatar?: string | null
  captain?: boolean
}

export interface AdminTeamModel {
  /** @maxLength 15 */
  name?: string | null
  /** @maxLength 31 */
  bio?: string | null
  locked?: boolean | null
}

export interface AdminUserInfoModel {
  /**
   * @minLength 3
   * @maxLength 15
   */
  userName?: string | null
  /** @format email */
  email?: string | null
  /** @maxLength 50 */
  bio?: string | null
  /** @format phone */
  phone?: string | null
  /** @maxLength 7 */
  realName?: string | null
  /** @maxLength 24 */
  stdNumber?: string | null
  /** @maxLength 11 */
  qqNumber?: string | null
  emailConfirmed?: boolean | null
  role?: Role | null
}

export interface LogMessageModel {
  /** @format date-time */
  time?: string
  name?: string | null
  level?: string | null
  ip?: string | null
  msg?: string | null
  status?: string | null
}

export enum ParticipationStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
  Suspended = 'Suspended',
  Unsubmitted = 'Unsubmitted',
}

export interface WriteupInfoModel {
  /** @format int32 */
  id?: number
  team?: TeamInfoModel
  url?: string
  /** @format date-time */
  uploadTimeUTC?: string
}

export interface ArrayResponseOfContainerInstanceModel {
  data: ContainerInstanceModel[]
  /** @format int32 */
  length: number
  /** @format int32 */
  total?: number
}

export interface ContainerInstanceModel {
  team?: TeamModel | null
  challenge?: ChallengeModel | null
  image?: string
  containerGuid?: string
  containerId?: string
  /** @format date-time */
  startedAt?: string
  /** @format date-time */
  expectStopAt?: string
  ip?: string
  /** @format int32 */
  port?: number
}

export interface TeamModel {
  /** @format int32 */
  id?: number
  name?: string
  avatar?: string | null
}

export interface ChallengeModel {
  /** @format int32 */
  id?: number
  title?: string
  tag?: ChallengeTag
}

export enum ChallengeTag {
  Misc = 'Misc',
  Crypto = 'Crypto',
  Pwn = 'Pwn',
  Web = 'Web',
  Reverse = 'Reverse',
  Blockchain = 'Blockchain',
  Forensics = 'Forensics',
  Hardware = 'Hardware',
  Mobile = 'Mobile',
  PPC = 'PPC',
}

export interface ArrayResponseOfLocalFile {
  data: LocalFile[]
  /** @format int32 */
  length: number
  /** @format int32 */
  total?: number
}

export interface LocalFile {
  /** @maxLength 64 */
  hash?: string
  /** @minLength 1 */
  name: string
}

export interface ProblemDetails {
  type?: string | null
  title?: string | null
  /** @format int32 */
  status?: number | null
  detail?: string | null
  instance?: string | null
  [key: string]: any
}

export interface PostEditModel {
  /**
   * @minLength 1
   * @maxLength 50
   */
  title: string
  summary?: string
  content?: string
  tags?: string[]
  isPinned?: boolean
}

export interface PostDetailModel {
  /** @minLength 1 */
  id: string
  /** @minLength 1 */
  title: string
  /** @minLength 1 */
  summary: string
  /** @minLength 1 */
  content: string
  isPinned: boolean
  tags?: string[] | null
  authorAvatar?: string | null
  authorName?: string | null
  /**
   * @format date-time
   * @minLength 1
   */
  time: string
}

export interface GameInfoModel {
  /** @format int32 */
  id?: number
  /** @minLength 1 */
  title: string
  hidden?: boolean
  summary?: string
  content?: string
  acceptWithoutReview?: boolean
  /** @maxLength 32 */
  inviteCode?: string | null
  organizations?: string[] | null
  /** @format int32 */
  teamMemberCountLimit?: number
  /** @format int32 */
  containerCountLimit?: number
  poster?: string | null
  publicKey?: string
  practiceMode?: boolean
  /**
   * @format date-time
   * @minLength 1
   */
  start: string
  /**
   * @format date-time
   * @minLength 1
   */
  end: string
  /**
   * @format date-time
   * @minLength 1
   */
  wpddl: string
  wpNote?: string
  /** @format int64 */
  bloodBonus?: number
}

export interface ArrayResponseOfGameInfoModel {
  data: GameInfoModel[]
  /** @format int32 */
  length: number
  /** @format int32 */
  total?: number
}

export interface GameNotice {
  /** @format int32 */
  id: number
  type: NoticeType
  /** @minLength 1 */
  content: string
  /**
   * @format date-time
   * @minLength 1
   */
  time: string
}

export enum NoticeType {
  Normal = 'Normal',
  FirstBlood = 'FirstBlood',
  SecondBlood = 'SecondBlood',
  ThirdBlood = 'ThirdBlood',
  NewHint = 'NewHint',
  NewChallenge = 'NewChallenge',
}

export interface GameNoticeModel {
  /** @minLength 1 */
  content: string
}

export interface ChallengeEditDetailModel {
  /** @format int32 */
  id?: number
  /** @minLength 1 */
  title: string
  content?: string
  tag: ChallengeTag
  type: ChallengeType
  hints?: string[]
  flagTemplate?: string | null
  isEnabled: boolean
  /** @format int32 */
  acceptedCount: number
  fileName?: string | null
  attachment?: Attachment | null
  testContainer?: ContainerInfoModel | null
  flags: FlagInfoModel[]
  /** @minLength 1 */
  containerImage: string
  /** @format int32 */
  memoryLimit: number
  /** @format int32 */
  cpuCount: number
  /** @format int32 */
  storageLimit: number
  /** @format int32 */
  containerExposePort: number
  enableTrafficCapture?: boolean | null
  /** @format int32 */
  originalScore: number
  /**
   * @format double
   * @min 0
   * @max 1
   */
  minScoreRate: number
  /** @format double */
  difficulty: number
}

export enum ChallengeType {
  StaticAttachment = 'StaticAttachment',
  StaticContainer = 'StaticContainer',
  DynamicAttachment = 'DynamicAttachment',
  DynamicContainer = 'DynamicContainer',
}

export interface Attachment {
  /** @format int32 */
  id: number
  type: FileType
  url?: string | null
  /** @format int64 */
  fileSize?: number | null
}

export enum FileType {
  None = 'None',
  Local = 'Local',
  Remote = 'Remote',
}

export interface ContainerInfoModel {
  status?: ContainerStatus
  /** @format date-time */
  startedAt?: string
  /** @format date-time */
  expectStopAt?: string
  entry?: string
}

export enum ContainerStatus {
  Pending = 'Pending',
  Running = 'Running',
  Destroyed = 'Destroyed',
}

export interface FlagInfoModel {
  /** @format int32 */
  id?: number
  flag?: string
  attachment?: Attachment | null
}

export interface ChallengeInfoModel {
  /** @format int32 */
  id?: number
  /** @minLength 1 */
  title: string
  tag?: ChallengeTag
  type?: ChallengeType
  isEnabled?: boolean
  /** @format int32 */
  score?: number
  /** @format int32 */
  minScore?: number
  /** @format int32 */
  originalScore?: number
}

export interface ChallengeUpdateModel {
  /** @minLength 1 */
  title?: string | null
  content?: string | null
  /** @maxLength 120 */
  flagTemplate?: string | null
  tag?: ChallengeTag | null
  hints?: string[] | null
  isEnabled?: boolean | null
  fileName?: string | null
  containerImage?: string | null
  /**
   * @format int32
   * @min 32
   * @max 1048576
   */
  memoryLimit?: number | null
  /**
   * @format int32
   * @min 1
   * @max 1024
   */
  cpuCount?: number | null
  /**
   * @format int32
   * @min 128
   * @max 1048576
   */
  storageLimit?: number | null
  /** @format int32 */
  containerExposePort?: number | null
  enableTrafficCapture?: boolean | null
  /** @format int32 */
  originalScore?: number | null
  /**
   * @format double
   * @min 0
   * @max 1
   */
  minScoreRate?: number | null
  /** @format double */
  difficulty?: number | null
}

export interface AttachmentCreateModel {
  attachmentType?: FileType
  fileHash?: string | null
  remoteUrl?: string | null
}

export interface FlagCreateModel {
  /**
   * @minLength 1
   * @maxLength 125
   */
  flag: string
  attachmentType?: FileType
  fileHash?: string | null
  remoteUrl?: string | null
}

export enum TaskStatus {
  Success = 'Success',
  Failed = 'Failed',
  Duplicate = 'Duplicate',
  Denied = 'Denied',
  NotFound = 'NotFound',
  Exit = 'Exit',
  Pending = 'Pending',
}

export interface BasicGameInfoModel {
  /** @format int32 */
  id?: number
  title?: string
  summary?: string
  poster?: string | null
  /** @format int32 */
  limit?: number
  /** @format date-time */
  start?: string
  /** @format date-time */
  end?: string
}

export interface DetailedGameInfoModel {
  /** @format int32 */
  id?: number
  title?: string
  summary?: string
  content?: string
  hidden?: boolean
  organizations?: string[] | null
  inviteCodeRequired?: boolean
  poster?: string | null
  /** @format int32 */
  limit?: number
  /** @format int32 */
  teamCount?: number
  organization?: string | null
  teamName?: string | null
  practiceMode?: boolean
  status?: ParticipationStatus
  /** @format date-time */
  start?: string
  /** @format date-time */
  end?: string
}

export interface GameJoinModel {
  /** @format int32 */
  teamId?: number
  organization?: string | null
  inviteCode?: string | null
}

export interface ScoreboardModel {
  /**
   * @format date-time
   * @minLength 1
   */
  updateTimeUTC: string
  /** @format int64 */
  bloodBonus: number
  timeLines?: Record<string, TopTimeLine[]>
  items?: ScoreboardItem[]
  challenges?: Record<string, ChallengeInfo[]>
}

export interface TopTimeLine {
  /** @format int32 */
  id?: number
  name?: string
  items?: TimeLine[]
}

export interface TimeLine {
  /** @format date-time */
  time?: string
  /** @format int32 */
  score?: number
}

export interface ScoreboardItem {
  /** @format int32 */
  id?: number
  name?: string
  bio?: string | null
  organization?: string | null
  avatar?: string | null
  /** @format int32 */
  score?: number
  /** @format int32 */
  rank?: number
  /** @format int32 */
  organizationRank?: number | null
  /** @format int32 */
  solvedCount?: number
  /** @format date-time */
  lastSubmissionTime?: string
  challenges?: ChallengeItem[]
}

export interface ChallengeItem {
  /** @format int32 */
  id?: number
  /** @format int32 */
  score?: number
  type?: SubmissionType
  userName?: string | null
  /** @format date-time */
  time?: string | null
}

export enum SubmissionType {
  Unaccepted = 'Unaccepted',
  FirstBlood = 'FirstBlood',
  SecondBlood = 'SecondBlood',
  ThirdBlood = 'ThirdBlood',
  Normal = 'Normal',
}

export interface ChallengeInfo {
  /** @format int32 */
  id?: number
  title?: string
  tag?: ChallengeTag
  /** @format int32 */
  score?: number
  /** @format int32 */
  solved?: number
  bloods?: (Blood | null)[]
}

export interface Blood {
  /** @format int32 */
  id?: number
  name?: string
  avatar?: string | null
  /** @format date-time */
  submitTimeUTC?: string | null
}

export interface GameEvent {
  type: EventType
  /** @minLength 1 */
  content: string
  /**
   * @format date-time
   * @minLength 1
   */
  time: string
  user?: string
  team?: string
}

export enum EventType {
  Normal = 'Normal',
  ContainerStart = 'ContainerStart',
  ContainerDestroy = 'ContainerDestroy',
  FlagSubmit = 'FlagSubmit',
  CheatDetected = 'CheatDetected',
}

export interface Submission {
  /** @maxLength 127 */
  answer?: string
  status?: AnswerResult
  /** @format date-time */
  time?: string
  user?: string
  team?: string
  challenge?: string
}

export enum AnswerResult {
  FlagSubmitted = 'FlagSubmitted',
  Accepted = 'Accepted',
  WrongAnswer = 'WrongAnswer',
  NotFound = 'NotFound',
  CheatDetected = 'CheatDetected',
}

export interface CheatInfoModel {
  ownedTeam?: ParticipationModel
  submitTeam?: ParticipationModel
  submission?: Submission
}

export interface ParticipationModel {
  /** @format int32 */
  id?: number
  team?: TeamModel
  status?: ParticipationStatus
  organization?: string | null
}

export interface ChallengeTrafficModel {
  /** @format int32 */
  id?: number
  /** @minLength 1 */
  title: string
  tag?: ChallengeTag
  type?: ChallengeType
  isEnabled?: boolean
  /** @format int32 */
  count?: number
}

export interface TeamTrafficModel {
  /** @format int32 */
  id?: number
  /** @format int32 */
  teamId?: number
  name?: string | null
  organization?: string | null
  avatar?: string | null
  /** @format int32 */
  count?: number
}

export interface FileRecord {
  fileName?: string
  /** @format int64 */
  size?: number
  /** @format date-time */
  updateTime?: string
}

export interface GameDetailModel {
  challenges?: Record<string, ChallengeInfo[]>
  rank?: ScoreboardItem | null
  /** @minLength 1 */
  teamToken: string
  /**
   * @format date-time
   * @minLength 1
   */
  wpddl: string
}

export interface ParticipationInfoModel {
  /** @format int32 */
  id?: number
  team?: TeamWithDetailedUserInfo
  registeredMembers?: string[]
  organization?: string | null
  status?: ParticipationStatus
}

export interface TeamWithDetailedUserInfo {
  /** @format int32 */
  id?: number
  name?: string | null
  bio?: string | null
  avatar?: string | null
  locked?: boolean
  captainId?: string
  members?: ProfileUserInfoModel[] | null
}

export interface ChallengeDetailModel {
  /** @format int32 */
  id?: number
  title?: string
  content?: string
  tag?: ChallengeTag
  hints?: string[] | null
  /** @format int32 */
  score?: number
  type?: ChallengeType
  context?: ClientFlagContext
}

export interface ClientFlagContext {
  /** @format date-time */
  closeTime?: string | null
  instanceEntry?: string | null
  url?: string | null
  /** @format int64 */
  fileSize?: number | null
}

export interface FlagSubmitModel {
  /**
   * @minLength 1
   * @maxLength 126
   */
  flag: string
}

export interface BasicWriteupInfoModel {
  submitted?: boolean
  name?: string
  /** @format int64 */
  fileSize?: number
  note?: string
}

export interface PostInfoModel {
  /** @minLength 1 */
  id: string
  /** @minLength 1 */
  title: string
  /** @minLength 1 */
  summary: string
  isPinned: boolean
  tags?: string[] | null
  authorAvatar?: string | null
  authorName?: string | null
  /**
   * @format date-time
   * @minLength 1
   */
  time: string
}

export interface ClientCaptchaInfoModel {
  type?: CaptchaProvider
  siteKey?: string
}

export enum CaptchaProvider {
  None = 'None',
  GoogleRecaptcha = 'GoogleRecaptcha',
  CloudflareTurnstile = 'CloudflareTurnstile',
}

export interface TeamUpdateModel {
  /** @maxLength 15 */
  name?: string | null
  /** @maxLength 31 */
  bio?: string | null
}

export interface TeamTransferModel {
  /** @minLength 1 */
  newCaptainId: string
}

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor(
    { securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}
  ) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>(
    { secure, path, type, query, format, body, ...params }: FullRequestParams
  ): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title GZCTF Server API
 * @version v1
 *
 * GZCTF Server 接口文档
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  account = {
    /**
     * No description
     *
     * @tags Account
     * @name AccountAvatar
     * @request PUT:/api/account/avatar
     */
    accountAvatar: (
      data: {
        /** @format binary */
        file?: File
      },
      params: RequestParams = {}
    ) =>
      this.request<string, RequestResponse>({
        path: `/api/account/avatar`,
        method: 'PUT',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountChangeEmail
     * @request PUT:/api/account/changeemail
     */
    accountChangeEmail: (data: MailChangeModel, params: RequestParams = {}) =>
      this.request<RequestResponseOfBoolean, RequestResponse>({
        path: `/api/account/changeemail`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountChangePassword
     * @request PUT:/api/account/changepassword
     */
    accountChangePassword: (data: PasswordChangeModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/account/changepassword`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountLogIn
     * @request POST:/api/account/login
     */
    accountLogIn: (data: LoginModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/account/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountLogOut
     * @request POST:/api/account/logout
     */
    accountLogOut: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/account/logout`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountMailChangeConfirm
     * @request POST:/api/account/mailchangeconfirm
     */
    accountMailChangeConfirm: (data: AccountVerifyModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/account/mailchangeconfirm`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountPasswordReset
     * @request POST:/api/account/passwordreset
     */
    accountPasswordReset: (data: PasswordResetModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/account/passwordreset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountProfile
     * @request GET:/api/account/profile
     */
    accountProfile: (params: RequestParams = {}) =>
      this.request<ProfileUserInfoModel, RequestResponse>({
        path: `/api/account/profile`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Account
     * @name AccountProfile
     * @request GET:/api/account/profile
     */
    useAccountProfile: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ProfileUserInfoModel, RequestResponse>(
        doFetch ? `/api/account/profile` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Account
     * @name AccountProfile
     * @request GET:/api/account/profile
     */
    mutateAccountProfile: (
      data?: ProfileUserInfoModel | Promise<ProfileUserInfoModel>,
      options?: MutatorOptions
    ) => mutate<ProfileUserInfoModel>(`/api/account/profile`, data, options),

    /**
     * No description
     *
     * @tags Account
     * @name AccountRecovery
     * @request POST:/api/account/recovery
     */
    accountRecovery: (data: RecoveryModel, params: RequestParams = {}) =>
      this.request<RequestResponse, RequestResponse>({
        path: `/api/account/recovery`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountRegister
     * @request POST:/api/account/register
     */
    accountRegister: (data: RegisterModel, params: RequestParams = {}) =>
      this.request<RequestResponseOfRegisterStatus, RequestResponse>({
        path: `/api/account/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountUpdate
     * @request PUT:/api/account/update
     */
    accountUpdate: (data: ProfileUpdateModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/account/update`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountVerify
     * @request POST:/api/account/verify
     */
    accountVerify: (data: AccountVerifyModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/account/verify`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  }
  admin = {
    /**
     * No description
     *
     * @tags Admin
     * @name AdminAddUsers
     * @request POST:/api/admin/users
     */
    adminAddUsers: (data: UserCreateModel[], params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/admin/users`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteTeam
     * @request DELETE:/api/admin/teams/{id}
     */
    adminDeleteTeam: (id: number, params: RequestParams = {}) =>
      this.request<string, RequestResponse>({
        path: `/api/admin/teams/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteUser
     * @request DELETE:/api/admin/users/{userid}
     */
    adminDeleteUser: (userid: string, params: RequestParams = {}) =>
      this.request<string, RequestResponse>({
        path: `/api/admin/users/${userid}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDestroyInstance
     * @request DELETE:/api/admin/instances/{id}
     */
    adminDestroyInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/admin/instances/${id}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDownloadAllWriteups
     * @request GET:/api/admin/writeups/{id}/all
     */
    adminDownloadAllWriteups: (id: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/admin/writeups/${id}/all`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminFiles
     * @request GET:/api/admin/files
     */
    adminFiles: (
      query?: {
        /**
         * @format int32
         * @default 50
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ArrayResponseOfLocalFile, RequestResponse>({
        path: `/api/admin/files`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminFiles
     * @request GET:/api/admin/files
     */
    useAdminFiles: (
      query?: {
        /**
         * @format int32
         * @default 50
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<ArrayResponseOfLocalFile, RequestResponse>(
        doFetch ? [`/api/admin/files`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminFiles
     * @request GET:/api/admin/files
     */
    mutateAdminFiles: (
      query?: {
        /**
         * @format int32
         * @default 50
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      data?: ArrayResponseOfLocalFile | Promise<ArrayResponseOfLocalFile>,
      options?: MutatorOptions
    ) => mutate<ArrayResponseOfLocalFile>([`/api/admin/files`, query], data, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetConfigs
     * @request GET:/api/admin/config
     */
    adminGetConfigs: (params: RequestParams = {}) =>
      this.request<ConfigEditModel, RequestResponse>({
        path: `/api/admin/config`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetConfigs
     * @request GET:/api/admin/config
     */
    useAdminGetConfigs: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ConfigEditModel, RequestResponse>(doFetch ? `/api/admin/config` : null, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetConfigs
     * @request GET:/api/admin/config
     */
    mutateAdminGetConfigs: (
      data?: ConfigEditModel | Promise<ConfigEditModel>,
      options?: MutatorOptions
    ) => mutate<ConfigEditModel>(`/api/admin/config`, data, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminInstances
     * @request GET:/api/admin/instances
     */
    adminInstances: (params: RequestParams = {}) =>
      this.request<ArrayResponseOfContainerInstanceModel, RequestResponse>({
        path: `/api/admin/instances`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminInstances
     * @request GET:/api/admin/instances
     */
    useAdminInstances: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ArrayResponseOfContainerInstanceModel, RequestResponse>(
        doFetch ? `/api/admin/instances` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminInstances
     * @request GET:/api/admin/instances
     */
    mutateAdminInstances: (
      data?: ArrayResponseOfContainerInstanceModel | Promise<ArrayResponseOfContainerInstanceModel>,
      options?: MutatorOptions
    ) => mutate<ArrayResponseOfContainerInstanceModel>(`/api/admin/instances`, data, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminLogs
     * @request GET:/api/admin/logs
     */
    adminLogs: (
      query?: {
        /** @default "All" */
        level?: string | null
        /**
         * @format int32
         * @default 50
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<LogMessageModel[], RequestResponse>({
        path: `/api/admin/logs`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminLogs
     * @request GET:/api/admin/logs
     */
    useAdminLogs: (
      query?: {
        /** @default "All" */
        level?: string | null
        /**
         * @format int32
         * @default 50
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<LogMessageModel[], RequestResponse>(
        doFetch ? [`/api/admin/logs`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminLogs
     * @request GET:/api/admin/logs
     */
    mutateAdminLogs: (
      query?: {
        /** @default "All" */
        level?: string | null
        /**
         * @format int32
         * @default 50
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      data?: LogMessageModel[] | Promise<LogMessageModel[]>,
      options?: MutatorOptions
    ) => mutate<LogMessageModel[]>([`/api/admin/logs`, query], data, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminParticipation
     * @request PUT:/api/admin/participation/{id}/{status}
     */
    adminParticipation: (id: number, status: ParticipationStatus, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/admin/participation/${id}/${status}`,
        method: 'PUT',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminResetPassword
     * @request DELETE:/api/admin/users/{userid}/password
     */
    adminResetPassword: (userid: string, params: RequestParams = {}) =>
      this.request<string, RequestResponse>({
        path: `/api/admin/users/${userid}/password`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminSearchTeams
     * @request POST:/api/admin/teams/search
     */
    adminSearchTeams: (
      query?: {
        hint?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<ArrayResponseOfTeamInfoModel, RequestResponse>({
        path: `/api/admin/teams/search`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminSearchUsers
     * @request POST:/api/admin/users/search
     */
    adminSearchUsers: (
      query?: {
        hint?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<ArrayResponseOfUserInfoModel, RequestResponse>({
        path: `/api/admin/users/search`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminTeams
     * @request GET:/api/admin/teams
     */
    adminTeams: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ArrayResponseOfTeamInfoModel, RequestResponse>({
        path: `/api/admin/teams`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminTeams
     * @request GET:/api/admin/teams
     */
    useAdminTeams: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<ArrayResponseOfTeamInfoModel, RequestResponse>(
        doFetch ? [`/api/admin/teams`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminTeams
     * @request GET:/api/admin/teams
     */
    mutateAdminTeams: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      data?: ArrayResponseOfTeamInfoModel | Promise<ArrayResponseOfTeamInfoModel>,
      options?: MutatorOptions
    ) => mutate<ArrayResponseOfTeamInfoModel>([`/api/admin/teams`, query], data, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateConfigs
     * @request PUT:/api/admin/config
     */
    adminUpdateConfigs: (data: ConfigEditModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/admin/config`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateTeam
     * @request PUT:/api/admin/teams/{id}
     */
    adminUpdateTeam: (id: number, data: AdminTeamModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/admin/teams/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateUserInfo
     * @request PUT:/api/admin/users/{userid}
     */
    adminUpdateUserInfo: (userid: string, data: AdminUserInfoModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/admin/users/${userid}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUserInfo
     * @request GET:/api/admin/users/{userid}
     */
    adminUserInfo: (userid: string, params: RequestParams = {}) =>
      this.request<ProfileUserInfoModel, RequestResponse>({
        path: `/api/admin/users/${userid}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminUserInfo
     * @request GET:/api/admin/users/{userid}
     */
    useAdminUserInfo: (userid: string, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ProfileUserInfoModel, RequestResponse>(
        doFetch ? `/api/admin/users/${userid}` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUserInfo
     * @request GET:/api/admin/users/{userid}
     */
    mutateAdminUserInfo: (
      userid: string,
      data?: ProfileUserInfoModel | Promise<ProfileUserInfoModel>,
      options?: MutatorOptions
    ) => mutate<ProfileUserInfoModel>(`/api/admin/users/${userid}`, data, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUsers
     * @request GET:/api/admin/users
     */
    adminUsers: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ArrayResponseOfUserInfoModel, RequestResponse>({
        path: `/api/admin/users`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminUsers
     * @request GET:/api/admin/users
     */
    useAdminUsers: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<ArrayResponseOfUserInfoModel, RequestResponse>(
        doFetch ? [`/api/admin/users`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUsers
     * @request GET:/api/admin/users
     */
    mutateAdminUsers: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      data?: ArrayResponseOfUserInfoModel | Promise<ArrayResponseOfUserInfoModel>,
      options?: MutatorOptions
    ) => mutate<ArrayResponseOfUserInfoModel>([`/api/admin/users`, query], data, options),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminWriteups
     * @request GET:/api/admin/writeups/{id}
     */
    adminWriteups: (id: number, params: RequestParams = {}) =>
      this.request<WriteupInfoModel[], RequestResponse>({
        path: `/api/admin/writeups/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AdminWriteups
     * @request GET:/api/admin/writeups/{id}
     */
    useAdminWriteups: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<WriteupInfoModel[], RequestResponse>(
        doFetch ? `/api/admin/writeups/${id}` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminWriteups
     * @request GET:/api/admin/writeups/{id}
     */
    mutateAdminWriteups: (
      id: number,
      data?: WriteupInfoModel[] | Promise<WriteupInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<WriteupInfoModel[]>(`/api/admin/writeups/${id}`, data, options),
  }
  assets = {
    /**
     * No description
     *
     * @tags Assets
     * @name AssetsDelete
     * @request DELETE:/api/assets/{hash}
     */
    assetsDelete: (hash: string, params: RequestParams = {}) =>
      this.request<void, RequestResponse | ProblemDetails>({
        path: `/api/assets/${hash}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assets
     * @name AssetsGetFile
     * @request GET:/assets/{hash}/{filename}
     */
    assetsGetFile: (hash: string, filename: string, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/assets/${hash}/${filename}`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assets
     * @name AssetsUpload
     * @request POST:/api/assets
     */
    assetsUpload: (
      data: {
        files?: File[]
      },
      query?: {
        filename?: string | null
      },
      params: RequestParams = {}
    ) =>
      this.request<LocalFile[], RequestResponse>({
        path: `/api/assets`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),
  }
  edit = {
    /**
     * No description
     *
     * @tags Edit
     * @name EditAddFlags
     * @request POST:/api/edit/games/{id}/challenges/{cId}/flags
     */
    editAddFlags: (id: number, cId: number, data: FlagCreateModel[], params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}/flags`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditAddGame
     * @request POST:/api/edit/games
     */
    editAddGame: (data: GameInfoModel, params: RequestParams = {}) =>
      this.request<GameInfoModel, RequestResponse>({
        path: `/api/edit/games`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditAddGameChallenge
     * @request POST:/api/edit/games/{id}/challenges
     */
    editAddGameChallenge: (id: number, data: ChallengeInfoModel, params: RequestParams = {}) =>
      this.request<ChallengeEditDetailModel, RequestResponse>({
        path: `/api/edit/games/${id}/challenges`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditAddGameNotice
     * @request POST:/api/edit/games/{id}/notices
     */
    editAddGameNotice: (id: number, data: GameNoticeModel, params: RequestParams = {}) =>
      this.request<GameNotice, RequestResponse>({
        path: `/api/edit/games/${id}/notices`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditAddPost
     * @request POST:/api/edit/posts
     */
    editAddPost: (data: PostEditModel, params: RequestParams = {}) =>
      this.request<string, RequestResponse>({
        path: `/api/edit/posts`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditCreateTestContainer
     * @request POST:/api/edit/games/{id}/challenges/{cId}/container
     */
    editCreateTestContainer: (id: number, cId: number, params: RequestParams = {}) =>
      this.request<ContainerInfoModel, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}/container`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditDeleteGame
     * @request DELETE:/api/edit/games/{id}
     */
    editDeleteGame: (id: number, params: RequestParams = {}) =>
      this.request<GameInfoModel, RequestResponse>({
        path: `/api/edit/games/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditDeleteGameNotice
     * @request DELETE:/api/edit/games/{id}/notices/{noticeId}
     */
    editDeleteGameNotice: (id: number, noticeId: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/edit/games/${id}/notices/${noticeId}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditDeleteGameWriteUps
     * @request DELETE:/api/edit/games/{id}/writeups
     */
    editDeleteGameWriteUps: (id: number, params: RequestParams = {}) =>
      this.request<GameInfoModel, RequestResponse>({
        path: `/api/edit/games/${id}/writeups`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditDeletePost
     * @request DELETE:/api/edit/posts/{id}
     */
    editDeletePost: (id: string, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/edit/posts/${id}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditDestroyTestContainer
     * @request DELETE:/api/edit/games/{id}/challenges/{cId}/container
     */
    editDestroyTestContainer: (id: number, cId: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}/container`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGame
     * @request GET:/api/edit/games/{id}
     */
    editGetGame: (id: number, params: RequestParams = {}) =>
      this.request<GameInfoModel, RequestResponse>({
        path: `/api/edit/games/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGame
     * @request GET:/api/edit/games/{id}
     */
    useEditGetGame: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<GameInfoModel, RequestResponse>(doFetch ? `/api/edit/games/${id}` : null, options),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGame
     * @request GET:/api/edit/games/{id}
     */
    mutateEditGetGame: (
      id: number,
      data?: GameInfoModel | Promise<GameInfoModel>,
      options?: MutatorOptions
    ) => mutate<GameInfoModel>(`/api/edit/games/${id}`, data, options),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameChallenge
     * @request GET:/api/edit/games/{id}/challenges/{cId}
     */
    editGetGameChallenge: (id: number, cId: number, params: RequestParams = {}) =>
      this.request<ChallengeEditDetailModel, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameChallenge
     * @request GET:/api/edit/games/{id}/challenges/{cId}
     */
    useEditGetGameChallenge: (
      id: number,
      cId: number,
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<ChallengeEditDetailModel, RequestResponse>(
        doFetch ? `/api/edit/games/${id}/challenges/${cId}` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameChallenge
     * @request GET:/api/edit/games/{id}/challenges/{cId}
     */
    mutateEditGetGameChallenge: (
      id: number,
      cId: number,
      data?: ChallengeEditDetailModel | Promise<ChallengeEditDetailModel>,
      options?: MutatorOptions
    ) => mutate<ChallengeEditDetailModel>(`/api/edit/games/${id}/challenges/${cId}`, data, options),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameChallenges
     * @request GET:/api/edit/games/{id}/challenges
     */
    editGetGameChallenges: (id: number, params: RequestParams = {}) =>
      this.request<ChallengeInfoModel[], RequestResponse>({
        path: `/api/edit/games/${id}/challenges`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameChallenges
     * @request GET:/api/edit/games/{id}/challenges
     */
    useEditGetGameChallenges: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ChallengeInfoModel[], RequestResponse>(
        doFetch ? `/api/edit/games/${id}/challenges` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameChallenges
     * @request GET:/api/edit/games/{id}/challenges
     */
    mutateEditGetGameChallenges: (
      id: number,
      data?: ChallengeInfoModel[] | Promise<ChallengeInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<ChallengeInfoModel[]>(`/api/edit/games/${id}/challenges`, data, options),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameNotices
     * @request GET:/api/edit/games/{id}/notices
     */
    editGetGameNotices: (id: number, params: RequestParams = {}) =>
      this.request<GameNotice[], RequestResponse>({
        path: `/api/edit/games/${id}/notices`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameNotices
     * @request GET:/api/edit/games/{id}/notices
     */
    useEditGetGameNotices: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<GameNotice[], RequestResponse>(
        doFetch ? `/api/edit/games/${id}/notices` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGameNotices
     * @request GET:/api/edit/games/{id}/notices
     */
    mutateEditGetGameNotices: (
      id: number,
      data?: GameNotice[] | Promise<GameNotice[]>,
      options?: MutatorOptions
    ) => mutate<GameNotice[]>(`/api/edit/games/${id}/notices`, data, options),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGames
     * @request GET:/api/edit/games
     */
    editGetGames: (
      query?: {
        /** @format int32 */
        count?: number
        /** @format int32 */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ArrayResponseOfGameInfoModel, RequestResponse>({
        path: `/api/edit/games`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGames
     * @request GET:/api/edit/games
     */
    useEditGetGames: (
      query?: {
        /** @format int32 */
        count?: number
        /** @format int32 */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<ArrayResponseOfGameInfoModel, RequestResponse>(
        doFetch ? [`/api/edit/games`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetGames
     * @request GET:/api/edit/games
     */
    mutateEditGetGames: (
      query?: {
        /** @format int32 */
        count?: number
        /** @format int32 */
        skip?: number
      },
      data?: ArrayResponseOfGameInfoModel | Promise<ArrayResponseOfGameInfoModel>,
      options?: MutatorOptions
    ) => mutate<ArrayResponseOfGameInfoModel>([`/api/edit/games`, query], data, options),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetTeamHashSalt
     * @request GET:/api/edit/games/{id}/teamhashsalt
     */
    editGetTeamHashSalt: (id: number, params: RequestParams = {}) =>
      this.request<string, RequestResponse>({
        path: `/api/edit/games/${id}/teamhashsalt`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Edit
     * @name EditGetTeamHashSalt
     * @request GET:/api/edit/games/{id}/teamhashsalt
     */
    useEditGetTeamHashSalt: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<string, RequestResponse>(
        doFetch ? `/api/edit/games/${id}/teamhashsalt` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Edit
     * @name EditGetTeamHashSalt
     * @request GET:/api/edit/games/{id}/teamhashsalt
     */
    mutateEditGetTeamHashSalt: (
      id: number,
      data?: string | Promise<string>,
      options?: MutatorOptions
    ) => mutate<string>(`/api/edit/games/${id}/teamhashsalt`, data, options),

    /**
     * No description
     *
     * @tags Edit
     * @name EditRemoveFlag
     * @request DELETE:/api/edit/games/{id}/challenges/{cId}/flags/{fId}
     */
    editRemoveFlag: (id: number, cId: number, fId: number, params: RequestParams = {}) =>
      this.request<TaskStatus, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}/flags/${fId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditRemoveGameChallenge
     * @request DELETE:/api/edit/games/{id}/challenges/{cId}
     */
    editRemoveGameChallenge: (id: number, cId: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditUpdateAttachment
     * @request POST:/api/edit/games/{id}/challenges/{cId}/attachment
     */
    editUpdateAttachment: (
      id: number,
      cId: number,
      data: AttachmentCreateModel,
      params: RequestParams = {}
    ) =>
      this.request<number, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}/attachment`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditUpdateGame
     * @request PUT:/api/edit/games/{id}
     */
    editUpdateGame: (id: number, data: GameInfoModel, params: RequestParams = {}) =>
      this.request<GameInfoModel, RequestResponse>({
        path: `/api/edit/games/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditUpdateGameChallenge
     * @request PUT:/api/edit/games/{id}/challenges/{cId}
     */
    editUpdateGameChallenge: (
      id: number,
      cId: number,
      data: ChallengeUpdateModel,
      params: RequestParams = {}
    ) =>
      this.request<ChallengeEditDetailModel, RequestResponse>({
        path: `/api/edit/games/${id}/challenges/${cId}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditUpdateGameNotice
     * @request PUT:/api/edit/games/{id}/notices/{noticeId}
     */
    editUpdateGameNotice: (
      id: number,
      noticeId: number,
      data: GameNoticeModel,
      params: RequestParams = {}
    ) =>
      this.request<GameNotice, RequestResponse>({
        path: `/api/edit/games/${id}/notices/${noticeId}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditUpdateGamePoster
     * @request PUT:/api/edit/games/{id}/poster
     */
    editUpdateGamePoster: (
      id: number,
      data: {
        /** @format binary */
        file?: File
      },
      params: RequestParams = {}
    ) =>
      this.request<string, RequestResponse>({
        path: `/api/edit/games/${id}/poster`,
        method: 'PUT',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edit
     * @name EditUpdatePost
     * @request PUT:/api/edit/posts/{id}
     */
    editUpdatePost: (id: string, data: PostEditModel, params: RequestParams = {}) =>
      this.request<PostDetailModel, RequestResponse>({
        path: `/api/edit/posts/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  game = {
    /**
     * No description
     *
     * @tags Game
     * @name GameChallengesWithTeamInfo
     * @request GET:/api/game/{id}/details
     */
    gameChallengesWithTeamInfo: (id: number, params: RequestParams = {}) =>
      this.request<GameDetailModel, RequestResponse>({
        path: `/api/game/${id}/details`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameChallengesWithTeamInfo
     * @request GET:/api/game/{id}/details
     */
    useGameChallengesWithTeamInfo: (
      id: number,
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<GameDetailModel, RequestResponse>(doFetch ? `/api/game/${id}/details` : null, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameChallengesWithTeamInfo
     * @request GET:/api/game/{id}/details
     */
    mutateGameChallengesWithTeamInfo: (
      id: number,
      data?: GameDetailModel | Promise<GameDetailModel>,
      options?: MutatorOptions
    ) => mutate<GameDetailModel>(`/api/game/${id}/details`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameCheatInfo
     * @request GET:/api/game/{id}/cheatinfo
     */
    gameCheatInfo: (id: number, params: RequestParams = {}) =>
      this.request<CheatInfoModel[], RequestResponse>({
        path: `/api/game/${id}/cheatinfo`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameCheatInfo
     * @request GET:/api/game/{id}/cheatinfo
     */
    useGameCheatInfo: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<CheatInfoModel[], RequestResponse>(
        doFetch ? `/api/game/${id}/cheatinfo` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameCheatInfo
     * @request GET:/api/game/{id}/cheatinfo
     */
    mutateGameCheatInfo: (
      id: number,
      data?: CheatInfoModel[] | Promise<CheatInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<CheatInfoModel[]>(`/api/game/${id}/cheatinfo`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameCreateContainer
     * @request POST:/api/game/{id}/container/{challengeId}
     */
    gameCreateContainer: (id: number, challengeId: number, params: RequestParams = {}) =>
      this.request<ContainerInfoModel, RequestResponse>({
        path: `/api/game/${id}/container/${challengeId}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameDeleteContainer
     * @request DELETE:/api/game/{id}/container/{challengeId}
     */
    gameDeleteContainer: (id: number, challengeId: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/game/${id}/container/${challengeId}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameEvents
     * @request GET:/api/game/{id}/events
     */
    gameEvents: (
      id: number,
      query?: {
        /** @default false */
        hideContainer?: boolean
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<GameEvent[], RequestResponse>({
        path: `/api/game/${id}/events`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameEvents
     * @request GET:/api/game/{id}/events
     */
    useGameEvents: (
      id: number,
      query?: {
        /** @default false */
        hideContainer?: boolean
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<GameEvent[], RequestResponse>(
        doFetch ? [`/api/game/${id}/events`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameEvents
     * @request GET:/api/game/{id}/events
     */
    mutateGameEvents: (
      id: number,
      query?: {
        /** @default false */
        hideContainer?: boolean
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      data?: GameEvent[] | Promise<GameEvent[]>,
      options?: MutatorOptions
    ) => mutate<GameEvent[]>([`/api/game/${id}/events`, query], data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGames
     * @request GET:/api/game/{id}
     */
    gameGames: (id: number, params: RequestParams = {}) =>
      this.request<DetailedGameInfoModel, RequestResponse>({
        path: `/api/game/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameGames
     * @request GET:/api/game/{id}
     */
    useGameGames: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<DetailedGameInfoModel, RequestResponse>(doFetch ? `/api/game/${id}` : null, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGames
     * @request GET:/api/game/{id}
     */
    mutateGameGames: (
      id: number,
      data?: DetailedGameInfoModel | Promise<DetailedGameInfoModel>,
      options?: MutatorOptions
    ) => mutate<DetailedGameInfoModel>(`/api/game/${id}`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGamesAll
     * @request GET:/api/game
     */
    gameGamesAll: (params: RequestParams = {}) =>
      this.request<BasicGameInfoModel[], RequestResponse>({
        path: `/api/game`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameGamesAll
     * @request GET:/api/game
     */
    useGameGamesAll: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<BasicGameInfoModel[], RequestResponse>(doFetch ? `/api/game` : null, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGamesAll
     * @request GET:/api/game
     */
    mutateGameGamesAll: (
      data?: BasicGameInfoModel[] | Promise<BasicGameInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<BasicGameInfoModel[]>(`/api/game`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallenge
     * @request GET:/api/game/{id}/challenges/{challengeId}
     */
    gameGetChallenge: (id: number, challengeId: number, params: RequestParams = {}) =>
      this.request<ChallengeDetailModel, RequestResponse>({
        path: `/api/game/${id}/challenges/${challengeId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallenge
     * @request GET:/api/game/{id}/challenges/{challengeId}
     */
    useGameGetChallenge: (
      id: number,
      challengeId: number,
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<ChallengeDetailModel, RequestResponse>(
        doFetch ? `/api/game/${id}/challenges/${challengeId}` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallenge
     * @request GET:/api/game/{id}/challenges/{challengeId}
     */
    mutateGameGetChallenge: (
      id: number,
      challengeId: number,
      data?: ChallengeDetailModel | Promise<ChallengeDetailModel>,
      options?: MutatorOptions
    ) => mutate<ChallengeDetailModel>(`/api/game/${id}/challenges/${challengeId}`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallengesWithTrafficCapturing
     * @request GET:/api/game/games/{id}/captures
     */
    gameGetChallengesWithTrafficCapturing: (id: number, params: RequestParams = {}) =>
      this.request<ChallengeTrafficModel[], RequestResponse>({
        path: `/api/game/games/${id}/captures`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallengesWithTrafficCapturing
     * @request GET:/api/game/games/{id}/captures
     */
    useGameGetChallengesWithTrafficCapturing: (
      id: number,
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<ChallengeTrafficModel[], RequestResponse>(
        doFetch ? `/api/game/games/${id}/captures` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallengesWithTrafficCapturing
     * @request GET:/api/game/games/{id}/captures
     */
    mutateGameGetChallengesWithTrafficCapturing: (
      id: number,
      data?: ChallengeTrafficModel[] | Promise<ChallengeTrafficModel[]>,
      options?: MutatorOptions
    ) => mutate<ChallengeTrafficModel[]>(`/api/game/games/${id}/captures`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallengeTraffic
     * @request GET:/api/game/captures/{challengeId}
     */
    gameGetChallengeTraffic: (challengeId: number, params: RequestParams = {}) =>
      this.request<TeamTrafficModel[], RequestResponse>({
        path: `/api/game/captures/${challengeId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallengeTraffic
     * @request GET:/api/game/captures/{challengeId}
     */
    useGameGetChallengeTraffic: (
      challengeId: number,
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<TeamTrafficModel[], RequestResponse>(
        doFetch ? `/api/game/captures/${challengeId}` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetChallengeTraffic
     * @request GET:/api/game/captures/{challengeId}
     */
    mutateGameGetChallengeTraffic: (
      challengeId: number,
      data?: TeamTrafficModel[] | Promise<TeamTrafficModel[]>,
      options?: MutatorOptions
    ) => mutate<TeamTrafficModel[]>(`/api/game/captures/${challengeId}`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetTeamTraffic
     * @request GET:/api/game/captures/{challengeId}/{partId}/{filename}
     */
    gameGetTeamTraffic: (
      challengeId: number,
      partId: number,
      filename: string,
      params: RequestParams = {}
    ) =>
      this.request<void, RequestResponse>({
        path: `/api/game/captures/${challengeId}/${partId}/${filename}`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetTeamTrafficAll
     * @request GET:/api/game/captures/{challengeId}/{partId}
     */
    gameGetTeamTrafficAll: (challengeId: number, partId: number, params: RequestParams = {}) =>
      this.request<FileRecord[], RequestResponse>({
        path: `/api/game/captures/${challengeId}/${partId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameGetTeamTrafficAll
     * @request GET:/api/game/captures/{challengeId}/{partId}
     */
    useGameGetTeamTrafficAll: (
      challengeId: number,
      partId: number,
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<FileRecord[], RequestResponse>(
        doFetch ? `/api/game/captures/${challengeId}/${partId}` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetTeamTrafficAll
     * @request GET:/api/game/captures/{challengeId}/{partId}
     */
    mutateGameGetTeamTrafficAll: (
      challengeId: number,
      partId: number,
      data?: FileRecord[] | Promise<FileRecord[]>,
      options?: MutatorOptions
    ) => mutate<FileRecord[]>(`/api/game/captures/${challengeId}/${partId}`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetTeamTrafficZip
     * @request GET:/api/game/captures/{challengeId}/{partId}/all
     */
    gameGetTeamTrafficZip: (challengeId: number, partId: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/game/captures/${challengeId}/${partId}/all`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetWriteup
     * @request GET:/api/game/{id}/writeup
     */
    gameGetWriteup: (id: number, params: RequestParams = {}) =>
      this.request<BasicWriteupInfoModel, RequestResponse>({
        path: `/api/game/${id}/writeup`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameGetWriteup
     * @request GET:/api/game/{id}/writeup
     */
    useGameGetWriteup: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<BasicWriteupInfoModel, RequestResponse>(
        doFetch ? `/api/game/${id}/writeup` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameGetWriteup
     * @request GET:/api/game/{id}/writeup
     */
    mutateGameGetWriteup: (
      id: number,
      data?: BasicWriteupInfoModel | Promise<BasicWriteupInfoModel>,
      options?: MutatorOptions
    ) => mutate<BasicWriteupInfoModel>(`/api/game/${id}/writeup`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameJoinGame
     * @request POST:/api/game/{id}
     */
    gameJoinGame: (id: number, data: GameJoinModel, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/game/${id}`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameLeaveGame
     * @request DELETE:/api/game/{id}
     */
    gameLeaveGame: (id: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/game/${id}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameNotices
     * @request GET:/api/game/{id}/notices
     */
    gameNotices: (
      id: number,
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<GameNotice[], RequestResponse>({
        path: `/api/game/${id}/notices`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameNotices
     * @request GET:/api/game/{id}/notices
     */
    useGameNotices: (
      id: number,
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<GameNotice[], RequestResponse>(
        doFetch ? [`/api/game/${id}/notices`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameNotices
     * @request GET:/api/game/{id}/notices
     */
    mutateGameNotices: (
      id: number,
      query?: {
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      data?: GameNotice[] | Promise<GameNotice[]>,
      options?: MutatorOptions
    ) => mutate<GameNotice[]>([`/api/game/${id}/notices`, query], data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameParticipations
     * @request GET:/api/game/{id}/participations
     */
    gameParticipations: (id: number, params: RequestParams = {}) =>
      this.request<ParticipationInfoModel[], RequestResponse>({
        path: `/api/game/${id}/participations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameParticipations
     * @request GET:/api/game/{id}/participations
     */
    useGameParticipations: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ParticipationInfoModel[], RequestResponse>(
        doFetch ? `/api/game/${id}/participations` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameParticipations
     * @request GET:/api/game/{id}/participations
     */
    mutateGameParticipations: (
      id: number,
      data?: ParticipationInfoModel[] | Promise<ParticipationInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<ParticipationInfoModel[]>(`/api/game/${id}/participations`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameProlongContainer
     * @request POST:/api/game/{id}/container/{challengeId}/prolong
     */
    gameProlongContainer: (id: number, challengeId: number, params: RequestParams = {}) =>
      this.request<ContainerInfoModel, RequestResponse>({
        path: `/api/game/${id}/container/${challengeId}/prolong`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameScoreboard
     * @request GET:/api/game/{id}/scoreboard
     */
    gameScoreboard: (id: number, params: RequestParams = {}) =>
      this.request<ScoreboardModel, RequestResponse>({
        path: `/api/game/${id}/scoreboard`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameScoreboard
     * @request GET:/api/game/{id}/scoreboard
     */
    useGameScoreboard: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ScoreboardModel, RequestResponse>(
        doFetch ? `/api/game/${id}/scoreboard` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameScoreboard
     * @request GET:/api/game/{id}/scoreboard
     */
    mutateGameScoreboard: (
      id: number,
      data?: ScoreboardModel | Promise<ScoreboardModel>,
      options?: MutatorOptions
    ) => mutate<ScoreboardModel>(`/api/game/${id}/scoreboard`, data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameScoreboardSheet
     * @request GET:/api/game/{id}/scoreboardsheet
     */
    gameScoreboardSheet: (id: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/game/${id}/scoreboardsheet`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameStatus
     * @request GET:/api/game/{id}/challenges/{challengeId}/status/{submitId}
     */
    gameStatus: (id: number, challengeId: number, submitId: number, params: RequestParams = {}) =>
      this.request<AnswerResult, RequestResponse>({
        path: `/api/game/${id}/challenges/${challengeId}/status/${submitId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameStatus
     * @request GET:/api/game/{id}/challenges/{challengeId}/status/{submitId}
     */
    useGameStatus: (
      id: number,
      challengeId: number,
      submitId: number,
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<AnswerResult, RequestResponse>(
        doFetch ? `/api/game/${id}/challenges/${challengeId}/status/${submitId}` : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameStatus
     * @request GET:/api/game/{id}/challenges/{challengeId}/status/{submitId}
     */
    mutateGameStatus: (
      id: number,
      challengeId: number,
      submitId: number,
      data?: AnswerResult | Promise<AnswerResult>,
      options?: MutatorOptions
    ) =>
      mutate<AnswerResult>(
        `/api/game/${id}/challenges/${challengeId}/status/${submitId}`,
        data,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameSubmissions
     * @request GET:/api/game/{id}/submissions
     */
    gameSubmissions: (
      id: number,
      query?: {
        type?: AnswerResult | null
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<Submission[], RequestResponse>({
        path: `/api/game/${id}/submissions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Game
     * @name GameSubmissions
     * @request GET:/api/game/{id}/submissions
     */
    useGameSubmissions: (
      id: number,
      query?: {
        type?: AnswerResult | null
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      options?: SWRConfiguration,
      doFetch: boolean = true
    ) =>
      useSWR<Submission[], RequestResponse>(
        doFetch ? [`/api/game/${id}/submissions`, query] : null,
        options
      ),

    /**
     * No description
     *
     * @tags Game
     * @name GameSubmissions
     * @request GET:/api/game/{id}/submissions
     */
    mutateGameSubmissions: (
      id: number,
      query?: {
        type?: AnswerResult | null
        /**
         * @format int32
         * @default 100
         */
        count?: number
        /**
         * @format int32
         * @default 0
         */
        skip?: number
      },
      data?: Submission[] | Promise<Submission[]>,
      options?: MutatorOptions
    ) => mutate<Submission[]>([`/api/game/${id}/submissions`, query], data, options),

    /**
     * No description
     *
     * @tags Game
     * @name GameSubmissionSheet
     * @request GET:/api/game/{id}/submissionsheet
     */
    gameSubmissionSheet: (id: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/game/${id}/submissionsheet`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameSubmit
     * @request POST:/api/game/{id}/challenges/{challengeId}
     */
    gameSubmit: (
      id: number,
      challengeId: number,
      data: FlagSubmitModel,
      params: RequestParams = {}
    ) =>
      this.request<number, RequestResponse>({
        path: `/api/game/${id}/challenges/${challengeId}`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Game
     * @name GameSubmitWriteup
     * @request POST:/api/game/{id}/writeup
     */
    gameSubmitWriteup: (
      id: number,
      data: {
        /** @format binary */
        file?: File
      },
      params: RequestParams = {}
    ) =>
      this.request<void, RequestResponse>({
        path: `/api/game/${id}/writeup`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  }
  info = {
    /**
     * No description
     *
     * @tags Info
     * @name InfoGetClientCaptchaInfo
     * @request GET:/api/captcha
     */
    infoGetClientCaptchaInfo: (params: RequestParams = {}) =>
      this.request<ClientCaptchaInfoModel, any>({
        path: `/api/captcha`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name InfoGetClientCaptchaInfo
     * @request GET:/api/captcha
     */
    useInfoGetClientCaptchaInfo: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<ClientCaptchaInfoModel, any>(doFetch ? `/api/captcha` : null, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetClientCaptchaInfo
     * @request GET:/api/captcha
     */
    mutateInfoGetClientCaptchaInfo: (
      data?: ClientCaptchaInfoModel | Promise<ClientCaptchaInfoModel>,
      options?: MutatorOptions
    ) => mutate<ClientCaptchaInfoModel>(`/api/captcha`, data, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetGlobalConfig
     * @request GET:/api/config
     */
    infoGetGlobalConfig: (params: RequestParams = {}) =>
      this.request<GlobalConfig, any>({
        path: `/api/config`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name InfoGetGlobalConfig
     * @request GET:/api/config
     */
    useInfoGetGlobalConfig: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<GlobalConfig, any>(doFetch ? `/api/config` : null, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetGlobalConfig
     * @request GET:/api/config
     */
    mutateInfoGetGlobalConfig: (
      data?: GlobalConfig | Promise<GlobalConfig>,
      options?: MutatorOptions
    ) => mutate<GlobalConfig>(`/api/config`, data, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetLatestPosts
     * @request GET:/api/posts/latest
     */
    infoGetLatestPosts: (params: RequestParams = {}) =>
      this.request<PostInfoModel[], any>({
        path: `/api/posts/latest`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name InfoGetLatestPosts
     * @request GET:/api/posts/latest
     */
    useInfoGetLatestPosts: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<PostInfoModel[], any>(doFetch ? `/api/posts/latest` : null, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetLatestPosts
     * @request GET:/api/posts/latest
     */
    mutateInfoGetLatestPosts: (
      data?: PostInfoModel[] | Promise<PostInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<PostInfoModel[]>(`/api/posts/latest`, data, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetPost
     * @request GET:/api/posts/{id}
     */
    infoGetPost: (id: string, params: RequestParams = {}) =>
      this.request<PostDetailModel, RequestResponse>({
        path: `/api/posts/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name InfoGetPost
     * @request GET:/api/posts/{id}
     */
    useInfoGetPost: (id: string, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<PostDetailModel, RequestResponse>(doFetch ? `/api/posts/${id}` : null, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetPost
     * @request GET:/api/posts/{id}
     */
    mutateInfoGetPost: (
      id: string,
      data?: PostDetailModel | Promise<PostDetailModel>,
      options?: MutatorOptions
    ) => mutate<PostDetailModel>(`/api/posts/${id}`, data, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetPosts
     * @request GET:/api/posts
     */
    infoGetPosts: (params: RequestParams = {}) =>
      this.request<PostInfoModel[], any>({
        path: `/api/posts`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name InfoGetPosts
     * @request GET:/api/posts
     */
    useInfoGetPosts: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<PostInfoModel[], any>(doFetch ? `/api/posts` : null, options),

    /**
     * No description
     *
     * @tags Info
     * @name InfoGetPosts
     * @request GET:/api/posts
     */
    mutateInfoGetPosts: (
      data?: PostInfoModel[] | Promise<PostInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<PostInfoModel[]>(`/api/posts`, data, options),
  }
  proxy = {
    /**
     * No description
     *
     * @tags Proxy
     * @name ProxyProxyForInstance
     * @request GET:/api/proxy/{id}
     */
    proxyProxyForInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/proxy/${id}`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Proxy
     * @name ProxyProxyForNoInstance
     * @request GET:/api/proxy/noinst/{id}
     */
    proxyProxyForNoInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/proxy/noinst/${id}`,
        method: 'GET',
        ...params,
      }),
  }
  team = {
    /**
     * No description
     *
     * @tags Team
     * @name TeamAccept
     * @request POST:/api/team/accept
     */
    teamAccept: (data: string, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/team/accept`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamAvatar
     * @request PUT:/api/team/{id}/avatar
     */
    teamAvatar: (
      id: number,
      data: {
        /** @format binary */
        file?: File
      },
      params: RequestParams = {}
    ) =>
      this.request<string, RequestResponse>({
        path: `/api/team/${id}/avatar`,
        method: 'PUT',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamCreateTeam
     * @request POST:/api/team
     */
    teamCreateTeam: (data: TeamUpdateModel, params: RequestParams = {}) =>
      this.request<TeamInfoModel, RequestResponse>({
        path: `/api/team`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamDeleteTeam
     * @request DELETE:/api/team/{id}
     */
    teamDeleteTeam: (id: number, params: RequestParams = {}) =>
      this.request<TeamInfoModel, RequestResponse>({
        path: `/api/team/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamGetBasicInfo
     * @request GET:/api/team/{id}
     */
    teamGetBasicInfo: (id: number, params: RequestParams = {}) =>
      this.request<TeamInfoModel, RequestResponse>({
        path: `/api/team/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Team
     * @name TeamGetBasicInfo
     * @request GET:/api/team/{id}
     */
    useTeamGetBasicInfo: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<TeamInfoModel, RequestResponse>(doFetch ? `/api/team/${id}` : null, options),

    /**
     * No description
     *
     * @tags Team
     * @name TeamGetBasicInfo
     * @request GET:/api/team/{id}
     */
    mutateTeamGetBasicInfo: (
      id: number,
      data?: TeamInfoModel | Promise<TeamInfoModel>,
      options?: MutatorOptions
    ) => mutate<TeamInfoModel>(`/api/team/${id}`, data, options),

    /**
     * No description
     *
     * @tags Team
     * @name TeamGetTeamsInfo
     * @request GET:/api/team
     */
    teamGetTeamsInfo: (params: RequestParams = {}) =>
      this.request<TeamInfoModel[], RequestResponse>({
        path: `/api/team`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Team
     * @name TeamGetTeamsInfo
     * @request GET:/api/team
     */
    useTeamGetTeamsInfo: (options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<TeamInfoModel[], RequestResponse>(doFetch ? `/api/team` : null, options),

    /**
     * No description
     *
     * @tags Team
     * @name TeamGetTeamsInfo
     * @request GET:/api/team
     */
    mutateTeamGetTeamsInfo: (
      data?: TeamInfoModel[] | Promise<TeamInfoModel[]>,
      options?: MutatorOptions
    ) => mutate<TeamInfoModel[]>(`/api/team`, data, options),

    /**
     * No description
     *
     * @tags Team
     * @name TeamInviteCode
     * @request GET:/api/team/{id}/invite
     */
    teamInviteCode: (id: number, params: RequestParams = {}) =>
      this.request<string, RequestResponse>({
        path: `/api/team/${id}/invite`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
    /**
     * No description
     *
     * @tags Team
     * @name TeamInviteCode
     * @request GET:/api/team/{id}/invite
     */
    useTeamInviteCode: (id: number, options?: SWRConfiguration, doFetch: boolean = true) =>
      useSWR<string, RequestResponse>(doFetch ? `/api/team/${id}/invite` : null, options),

    /**
     * No description
     *
     * @tags Team
     * @name TeamInviteCode
     * @request GET:/api/team/{id}/invite
     */
    mutateTeamInviteCode: (id: number, data?: string | Promise<string>, options?: MutatorOptions) =>
      mutate<string>(`/api/team/${id}/invite`, data, options),

    /**
     * No description
     *
     * @tags Team
     * @name TeamKickUser
     * @request POST:/api/team/{id}/kick/{userid}
     */
    teamKickUser: (id: number, userid: string, params: RequestParams = {}) =>
      this.request<TeamInfoModel, RequestResponse>({
        path: `/api/team/${id}/kick/${userid}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamLeave
     * @request POST:/api/team/{id}/leave
     */
    teamLeave: (id: number, params: RequestParams = {}) =>
      this.request<void, RequestResponse>({
        path: `/api/team/${id}/leave`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamTransfer
     * @request PUT:/api/team/{id}/transfer
     */
    teamTransfer: (id: number, data: TeamTransferModel, params: RequestParams = {}) =>
      this.request<TeamInfoModel, RequestResponse>({
        path: `/api/team/${id}/transfer`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamUpdateInviteToken
     * @request PUT:/api/team/{id}/invite
     */
    teamUpdateInviteToken: (id: number, params: RequestParams = {}) =>
      this.request<string, RequestResponse>({
        path: `/api/team/${id}/invite`,
        method: 'PUT',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name TeamUpdateTeam
     * @request PUT:/api/team/{id}
     */
    teamUpdateTeam: (id: number, data: TeamUpdateModel, params: RequestParams = {}) =>
      this.request<TeamInfoModel, RequestResponse>({
        path: `/api/team/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}

const api = new Api()
export default api

export const fetcher = async (path: string, query?: Record<string, unknown>) => {
  return await api
    .request({ path, query })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data
    })
}
