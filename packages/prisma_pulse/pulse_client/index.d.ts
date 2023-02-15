
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  password: string
  fullName: string
  uniqueName: string
  phoneNumber: string
  address: string
  role: Role
}

/**
 * Model Appointment
 * 
 */
export type Appointment = {
  id: string
  createdAt: Date
  updatedAt: Date
  date: Date
  title: string
  content: string | null
  authorId: string
  patientId: string
}

/**
 * Model Doctor
 * 
 */
export type Doctor = {
  id: string
  createdAt: Date
  updatedAt: Date
  calLink: string
  calUserId: number
  userId: string
  specializationsIds: string[]
}

/**
 * Model Specialization
 * 
 */
export type Specialization = {
  id: string
  name: string
  description: string
  doctorIds: string[]
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  LABORATORY: 'LABORATORY'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number}): Promise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<GlobalReject>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<GlobalReject>;

  /**
   * `prisma.specialization`: Exposes CRUD operations for the **Specialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specializations
    * const specializations = await prisma.specialization.findMany()
    * ```
    */
  get specialization(): Prisma.SpecializationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Appointment: 'Appointment',
    Doctor: 'Doctor',
    Specialization: 'Specialization'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    appointmentsAsAuthor: number
    appointmentsAsPatient: number
  }

  export type UserCountOutputTypeSelect = {
    appointmentsAsAuthor?: boolean
    appointmentsAsPatient?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type DoctorCountOutputType
   */


  export type DoctorCountOutputType = {
    specializations: number
  }

  export type DoctorCountOutputTypeSelect = {
    specializations?: boolean
  }

  export type DoctorCountOutputTypeGetPayload<S extends boolean | null | undefined | DoctorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DoctorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DoctorCountOutputTypeArgs)
    ? DoctorCountOutputType 
    : S extends { select: any } & (DoctorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DoctorCountOutputType ? DoctorCountOutputType[P] : never
  } 
      : DoctorCountOutputType




  // Custom InputTypes

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     * 
    **/
    select?: DoctorCountOutputTypeSelect | null
  }



  /**
   * Count Type SpecializationCountOutputType
   */


  export type SpecializationCountOutputType = {
    Doctor: number
  }

  export type SpecializationCountOutputTypeSelect = {
    Doctor?: boolean
  }

  export type SpecializationCountOutputTypeGetPayload<S extends boolean | null | undefined | SpecializationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SpecializationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SpecializationCountOutputTypeArgs)
    ? SpecializationCountOutputType 
    : S extends { select: any } & (SpecializationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SpecializationCountOutputType ? SpecializationCountOutputType[P] : never
  } 
      : SpecializationCountOutputType




  // Custom InputTypes

  /**
   * SpecializationCountOutputType without action
   */
  export type SpecializationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SpecializationCountOutputType
     * 
    **/
    select?: SpecializationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    fullName: string | null
    uniqueName: string | null
    phoneNumber: string | null
    address: string | null
    role: Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    fullName: string | null
    uniqueName: string | null
    phoneNumber: string | null
    address: string | null
    role: Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    fullName: number
    uniqueName: number
    phoneNumber: number
    address: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fullName?: true
    uniqueName?: true
    phoneNumber?: true
    address?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fullName?: true
    uniqueName?: true
    phoneNumber?: true
    address?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fullName?: true
    uniqueName?: true
    phoneNumber?: true
    address?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role: Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    uniqueName?: boolean
    phoneNumber?: boolean
    address?: boolean
    role?: boolean
    appointmentsAsAuthor?: boolean | User$appointmentsAsAuthorArgs
    appointmentsAsPatient?: boolean | User$appointmentsAsPatientArgs
    doctor?: boolean | DoctorArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    appointmentsAsAuthor?: boolean | User$appointmentsAsAuthorArgs
    appointmentsAsPatient?: boolean | User$appointmentsAsPatientArgs
    doctor?: boolean | DoctorArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'appointmentsAsAuthor' ? Array < AppointmentGetPayload<S['include'][P]>>  :
        P extends 'appointmentsAsPatient' ? Array < AppointmentGetPayload<S['include'][P]>>  :
        P extends 'doctor' ? DoctorGetPayload<S['include'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'appointmentsAsAuthor' ? Array < AppointmentGetPayload<S['select'][P]>>  :
        P extends 'appointmentsAsPatient' ? Array < AppointmentGetPayload<S['select'][P]>>  :
        P extends 'doctor' ? DoctorGetPayload<S['select'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    appointmentsAsAuthor<T extends User$appointmentsAsAuthorArgs= {}>(args?: Subset<T, User$appointmentsAsAuthorArgs>): PrismaPromise<Array<AppointmentGetPayload<T>>| Null>;

    appointmentsAsPatient<T extends User$appointmentsAsPatientArgs= {}>(args?: Subset<T, User$appointmentsAsPatientArgs>): PrismaPromise<Array<AppointmentGetPayload<T>>| Null>;

    doctor<T extends DoctorArgs= {}>(args?: Subset<T, DoctorArgs>): Prisma__DoctorClient<DoctorGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User.appointmentsAsAuthor
   */
  export type User$appointmentsAsAuthorArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * User.appointmentsAsPatient
   */
  export type User$appointmentsAsPatientArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Appointment
   */


  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    date: Date | null
    title: string | null
    content: string | null
    authorId: string | null
    patientId: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    date: Date | null
    title: string | null
    content: string | null
    authorId: string | null
    patientId: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    date: number
    title: number
    content: number
    authorId: number
    patientId: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    date?: true
    title?: true
    content?: true
    authorId?: true
    patientId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    date?: true
    title?: true
    content?: true
    authorId?: true
    patientId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    date?: true
    title?: true
    content?: true
    authorId?: true
    patientId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs = {
    /**
     * Filter which Appointment to aggregate.
     * 
    **/
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs = {
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithAggregationInput>
    by: Array<AppointmentScalarFieldEnum>
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }


  export type AppointmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    date: Date
    title: string
    content: string | null
    authorId: string
    patientId: string
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    date?: boolean
    title?: boolean
    content?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    patient?: boolean | UserArgs
    patientId?: boolean
  }


  export type AppointmentInclude = {
    author?: boolean | UserArgs
    patient?: boolean | UserArgs
  } 

  export type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Appointment :
    S extends undefined ? never :
    S extends { include: any } & (AppointmentArgs | AppointmentFindManyArgs)
    ? Appointment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'patient' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AppointmentArgs | AppointmentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'patient' ? UserGetPayload<S['select'][P]> :  P extends keyof Appointment ? Appointment[P] : never
  } 
      : Appointment


  type AppointmentCountArgs = Merge<
    Omit<AppointmentFindManyArgs, 'select' | 'include'> & {
      select?: AppointmentCountAggregateInputType | true
    }
  >

  export interface AppointmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppointmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AppointmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Appointment'> extends True ? Prisma__AppointmentClient<AppointmentGetPayload<T>> : Prisma__AppointmentClient<AppointmentGetPayload<T> | null, null>

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AppointmentFindUniqueOrThrowArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppointmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AppointmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Appointment'> extends True ? Prisma__AppointmentClient<AppointmentGetPayload<T>> : Prisma__AppointmentClient<AppointmentGetPayload<T> | null, null>

    /**
     * Find the first Appointment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppointmentFindManyArgs>(
      args?: SelectSubset<T, AppointmentFindManyArgs>
    ): PrismaPromise<Array<AppointmentGetPayload<T>>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
    **/
    create<T extends AppointmentCreateArgs>(
      args: SelectSubset<T, AppointmentCreateArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Create many Appointments.
     *     @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppointmentCreateManyArgs>(
      args?: SelectSubset<T, AppointmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
    **/
    delete<T extends AppointmentDeleteArgs>(
      args: SelectSubset<T, AppointmentDeleteArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppointmentUpdateArgs>(
      args: SelectSubset<T, AppointmentUpdateArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppointmentDeleteManyArgs>(
      args?: SelectSubset<T, AppointmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppointmentUpdateManyArgs>(
      args: SelectSubset<T, AppointmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
    **/
    upsert<T extends AppointmentUpsertArgs>(
      args: SelectSubset<T, AppointmentUpsertArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Find zero or more Appointments that matches the filter.
     * @param {AppointmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const appointment = await prisma.appointment.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AppointmentFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Appointment.
     * @param {AppointmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const appointment = await prisma.appointment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AppointmentAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AppointmentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    patient<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Appointment base type for findUnique actions
   */
  export type AppointmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     * 
    **/
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUnique
   */
  export interface AppointmentFindUniqueArgs extends AppointmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     * 
    **/
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment base type for findFirst actions
   */
  export type AppointmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     * 
    **/
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     * 
    **/
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     * 
    **/
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }

  /**
   * Appointment findFirst
   */
  export interface AppointmentFindFirstArgs extends AppointmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     * 
    **/
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     * 
    **/
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     * 
    **/
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointments to fetch.
     * 
    **/
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     * 
    **/
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * Appointment create
   */
  export type AppointmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * The data needed to create a Appointment.
     * 
    **/
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }


  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs = {
    /**
     * The data used to create many Appointments.
     * 
    **/
    data: Enumerable<AppointmentCreateManyInput>
  }


  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * The data needed to update a Appointment.
     * 
    **/
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     * 
    **/
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs = {
    /**
     * The data used to update Appointments.
     * 
    **/
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     * 
    **/
    where?: AppointmentWhereInput
  }


  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     * 
    **/
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     * 
    **/
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }


  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter which Appointment to delete.
     * 
    **/
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs = {
    /**
     * Filter which Appointments to delete
     * 
    **/
    where?: AppointmentWhereInput
  }


  /**
   * Appointment findRaw
   */
  export type AppointmentFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Appointment aggregateRaw
   */
  export type AppointmentAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Appointment without action
   */
  export type AppointmentArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
  }



  /**
   * Model Doctor
   */


  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    calUserId: number | null
  }

  export type DoctorSumAggregateOutputType = {
    calUserId: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    calLink: string | null
    calUserId: number | null
    userId: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    calLink: string | null
    calUserId: number | null
    userId: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    calLink: number
    calUserId: number
    userId: number
    specializationsIds: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    calUserId?: true
  }

  export type DoctorSumAggregateInputType = {
    calUserId?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    calLink?: true
    calUserId?: true
    userId?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    calLink?: true
    calUserId?: true
    userId?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    calLink?: true
    calUserId?: true
    userId?: true
    specializationsIds?: true
    _all?: true
  }

  export type DoctorAggregateArgs = {
    /**
     * Filter which Doctor to aggregate.
     * 
    **/
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs = {
    where?: DoctorWhereInput
    orderBy?: Enumerable<DoctorOrderByWithAggregationInput>
    by: Array<DoctorScalarFieldEnum>
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }


  export type DoctorGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    calLink: string
    calUserId: number
    userId: string
    specializationsIds: string[]
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    calLink?: boolean
    calUserId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    specializationsIds?: boolean
    specializations?: boolean | Doctor$specializationsArgs
    _count?: boolean | DoctorCountOutputTypeArgs
  }


  export type DoctorInclude = {
    user?: boolean | UserArgs
    specializations?: boolean | Doctor$specializationsArgs
    _count?: boolean | DoctorCountOutputTypeArgs
  } 

  export type DoctorGetPayload<S extends boolean | null | undefined | DoctorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Doctor :
    S extends undefined ? never :
    S extends { include: any } & (DoctorArgs | DoctorFindManyArgs)
    ? Doctor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'specializations' ? Array < SpecializationGetPayload<S['include'][P]>>  :
        P extends '_count' ? DoctorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DoctorArgs | DoctorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'specializations' ? Array < SpecializationGetPayload<S['select'][P]>>  :
        P extends '_count' ? DoctorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Doctor ? Doctor[P] : never
  } 
      : Doctor


  type DoctorCountArgs = Merge<
    Omit<DoctorFindManyArgs, 'select' | 'include'> & {
      select?: DoctorCountAggregateInputType | true
    }
  >

  export interface DoctorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DoctorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Doctor'> extends True ? Prisma__DoctorClient<DoctorGetPayload<T>> : Prisma__DoctorClient<DoctorGetPayload<T> | null, null>

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindUniqueOrThrowArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DoctorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Doctor'> extends True ? Prisma__DoctorClient<DoctorGetPayload<T>> : Prisma__DoctorClient<DoctorGetPayload<T> | null, null>

    /**
     * Find the first Doctor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindFirstOrThrowArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DoctorFindManyArgs>(
      args?: SelectSubset<T, DoctorFindManyArgs>
    ): PrismaPromise<Array<DoctorGetPayload<T>>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends DoctorCreateArgs>(
      args: SelectSubset<T, DoctorCreateArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Create many Doctors.
     *     @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorCreateManyArgs>(
      args?: SelectSubset<T, DoctorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends DoctorDeleteArgs>(
      args: SelectSubset<T, DoctorDeleteArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorUpdateArgs>(
      args: SelectSubset<T, DoctorUpdateArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorDeleteManyArgs>(
      args?: SelectSubset<T, DoctorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorUpdateManyArgs>(
      args: SelectSubset<T, DoctorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorUpsertArgs>(
      args: SelectSubset<T, DoctorUpsertArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Find zero or more Doctors that matches the filter.
     * @param {DoctorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const doctor = await prisma.doctor.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DoctorFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Doctor.
     * @param {DoctorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const doctor = await prisma.doctor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DoctorAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DoctorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    specializations<T extends Doctor$specializationsArgs= {}>(args?: Subset<T, Doctor$specializationsArgs>): PrismaPromise<Array<SpecializationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Doctor base type for findUnique actions
   */
  export type DoctorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     * 
    **/
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUnique
   */
  export interface DoctorFindUniqueArgs extends DoctorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     * 
    **/
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor base type for findFirst actions
   */
  export type DoctorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     * 
    **/
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     * 
    **/
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     * 
    **/
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }

  /**
   * Doctor findFirst
   */
  export interface DoctorFindFirstArgs extends DoctorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     * 
    **/
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     * 
    **/
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     * 
    **/
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * Filter, which Doctors to fetch.
     * 
    **/
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     * 
    **/
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor create
   */
  export type DoctorCreateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * The data needed to create a Doctor.
     * 
    **/
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }


  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs = {
    /**
     * The data used to create many Doctors.
     * 
    **/
    data: Enumerable<DoctorCreateManyInput>
  }


  /**
   * Doctor update
   */
  export type DoctorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * The data needed to update a Doctor.
     * 
    **/
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     * 
    **/
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs = {
    /**
     * The data used to update Doctors.
     * 
    **/
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     * 
    **/
    where?: DoctorWhereInput
  }


  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     * 
    **/
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     * 
    **/
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }


  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    /**
     * Filter which Doctor to delete.
     * 
    **/
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs = {
    /**
     * Filter which Doctors to delete
     * 
    **/
    where?: DoctorWhereInput
  }


  /**
   * Doctor findRaw
   */
  export type DoctorFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Doctor aggregateRaw
   */
  export type DoctorAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Doctor.specializations
   */
  export type Doctor$specializationsArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    where?: SpecializationWhereInput
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    cursor?: SpecializationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SpecializationScalarFieldEnum>
  }


  /**
   * Doctor without action
   */
  export type DoctorArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
  }



  /**
   * Model Specialization
   */


  export type AggregateSpecialization = {
    _count: SpecializationCountAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  export type SpecializationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type SpecializationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type SpecializationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    doctorIds: number
    _all: number
  }


  export type SpecializationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SpecializationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SpecializationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    doctorIds?: true
    _all?: true
  }

  export type SpecializationAggregateArgs = {
    /**
     * Filter which Specialization to aggregate.
     * 
    **/
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     * 
    **/
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specializations
    **/
    _count?: true | SpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecializationMaxAggregateInputType
  }

  export type GetSpecializationAggregateType<T extends SpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialization[P]>
      : GetScalarType<T[P], AggregateSpecialization[P]>
  }




  export type SpecializationGroupByArgs = {
    where?: SpecializationWhereInput
    orderBy?: Enumerable<SpecializationOrderByWithAggregationInput>
    by: Array<SpecializationScalarFieldEnum>
    having?: SpecializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecializationCountAggregateInputType | true
    _min?: SpecializationMinAggregateInputType
    _max?: SpecializationMaxAggregateInputType
  }


  export type SpecializationGroupByOutputType = {
    id: string
    name: string
    description: string
    doctorIds: string[]
    _count: SpecializationCountAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  type GetSpecializationGroupByPayload<T extends SpecializationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
        }
      >
    >


  export type SpecializationSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    doctorIds?: boolean
    Doctor?: boolean | Specialization$DoctorArgs
    _count?: boolean | SpecializationCountOutputTypeArgs
  }


  export type SpecializationInclude = {
    Doctor?: boolean | Specialization$DoctorArgs
    _count?: boolean | SpecializationCountOutputTypeArgs
  } 

  export type SpecializationGetPayload<S extends boolean | null | undefined | SpecializationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Specialization :
    S extends undefined ? never :
    S extends { include: any } & (SpecializationArgs | SpecializationFindManyArgs)
    ? Specialization  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Doctor' ? Array < DoctorGetPayload<S['include'][P]>>  :
        P extends '_count' ? SpecializationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SpecializationArgs | SpecializationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Doctor' ? Array < DoctorGetPayload<S['select'][P]>>  :
        P extends '_count' ? SpecializationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Specialization ? Specialization[P] : never
  } 
      : Specialization


  type SpecializationCountArgs = Merge<
    Omit<SpecializationFindManyArgs, 'select' | 'include'> & {
      select?: SpecializationCountAggregateInputType | true
    }
  >

  export interface SpecializationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Specialization that matches the filter.
     * @param {SpecializationFindUniqueArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpecializationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SpecializationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Specialization'> extends True ? Prisma__SpecializationClient<SpecializationGetPayload<T>> : Prisma__SpecializationClient<SpecializationGetPayload<T> | null, null>

    /**
     * Find one Specialization that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SpecializationFindUniqueOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpecializationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SpecializationFindUniqueOrThrowArgs>
    ): Prisma__SpecializationClient<SpecializationGetPayload<T>>

    /**
     * Find the first Specialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindFirstArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpecializationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SpecializationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Specialization'> extends True ? Prisma__SpecializationClient<SpecializationGetPayload<T>> : Prisma__SpecializationClient<SpecializationGetPayload<T> | null, null>

    /**
     * Find the first Specialization that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindFirstOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpecializationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SpecializationFindFirstOrThrowArgs>
    ): Prisma__SpecializationClient<SpecializationGetPayload<T>>

    /**
     * Find zero or more Specializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specializations
     * const specializations = await prisma.specialization.findMany()
     * 
     * // Get first 10 Specializations
     * const specializations = await prisma.specialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specializationWithIdOnly = await prisma.specialization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpecializationFindManyArgs>(
      args?: SelectSubset<T, SpecializationFindManyArgs>
    ): PrismaPromise<Array<SpecializationGetPayload<T>>>

    /**
     * Create a Specialization.
     * @param {SpecializationCreateArgs} args - Arguments to create a Specialization.
     * @example
     * // Create one Specialization
     * const Specialization = await prisma.specialization.create({
     *   data: {
     *     // ... data to create a Specialization
     *   }
     * })
     * 
    **/
    create<T extends SpecializationCreateArgs>(
      args: SelectSubset<T, SpecializationCreateArgs>
    ): Prisma__SpecializationClient<SpecializationGetPayload<T>>

    /**
     * Create many Specializations.
     *     @param {SpecializationCreateManyArgs} args - Arguments to create many Specializations.
     *     @example
     *     // Create many Specializations
     *     const specialization = await prisma.specialization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpecializationCreateManyArgs>(
      args?: SelectSubset<T, SpecializationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Specialization.
     * @param {SpecializationDeleteArgs} args - Arguments to delete one Specialization.
     * @example
     * // Delete one Specialization
     * const Specialization = await prisma.specialization.delete({
     *   where: {
     *     // ... filter to delete one Specialization
     *   }
     * })
     * 
    **/
    delete<T extends SpecializationDeleteArgs>(
      args: SelectSubset<T, SpecializationDeleteArgs>
    ): Prisma__SpecializationClient<SpecializationGetPayload<T>>

    /**
     * Update one Specialization.
     * @param {SpecializationUpdateArgs} args - Arguments to update one Specialization.
     * @example
     * // Update one Specialization
     * const specialization = await prisma.specialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpecializationUpdateArgs>(
      args: SelectSubset<T, SpecializationUpdateArgs>
    ): Prisma__SpecializationClient<SpecializationGetPayload<T>>

    /**
     * Delete zero or more Specializations.
     * @param {SpecializationDeleteManyArgs} args - Arguments to filter Specializations to delete.
     * @example
     * // Delete a few Specializations
     * const { count } = await prisma.specialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpecializationDeleteManyArgs>(
      args?: SelectSubset<T, SpecializationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specializations
     * const specialization = await prisma.specialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpecializationUpdateManyArgs>(
      args: SelectSubset<T, SpecializationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Specialization.
     * @param {SpecializationUpsertArgs} args - Arguments to update or create a Specialization.
     * @example
     * // Update or create a Specialization
     * const specialization = await prisma.specialization.upsert({
     *   create: {
     *     // ... data to create a Specialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialization we want to update
     *   }
     * })
    **/
    upsert<T extends SpecializationUpsertArgs>(
      args: SelectSubset<T, SpecializationUpsertArgs>
    ): Prisma__SpecializationClient<SpecializationGetPayload<T>>

    /**
     * Find zero or more Specializations that matches the filter.
     * @param {SpecializationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const specialization = await prisma.specialization.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SpecializationFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Specialization.
     * @param {SpecializationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const specialization = await prisma.specialization.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SpecializationAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationCountArgs} args - Arguments to filter Specializations to count.
     * @example
     * // Count the number of Specializations
     * const count = await prisma.specialization.count({
     *   where: {
     *     // ... the filter for the Specializations we want to count
     *   }
     * })
    **/
    count<T extends SpecializationCountArgs>(
      args?: Subset<T, SpecializationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecializationAggregateArgs>(args: Subset<T, SpecializationAggregateArgs>): PrismaPromise<GetSpecializationAggregateType<T>>

    /**
     * Group by Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecializationGroupByArgs['orderBy'] }
        : { orderBy?: SpecializationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecializationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpecializationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Doctor<T extends Specialization$DoctorArgs= {}>(args?: Subset<T, Specialization$DoctorArgs>): PrismaPromise<Array<DoctorGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Specialization base type for findUnique actions
   */
  export type SpecializationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     * 
    **/
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization findUnique
   */
  export interface SpecializationFindUniqueArgs extends SpecializationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Specialization findUniqueOrThrow
   */
  export type SpecializationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     * 
    **/
    where: SpecializationWhereUniqueInput
  }


  /**
   * Specialization base type for findFirst actions
   */
  export type SpecializationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     * 
    **/
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     * 
    **/
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     * 
    **/
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     * 
    **/
    distinct?: Enumerable<SpecializationScalarFieldEnum>
  }

  /**
   * Specialization findFirst
   */
  export interface SpecializationFindFirstArgs extends SpecializationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Specialization findFirstOrThrow
   */
  export type SpecializationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     * 
    **/
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     * 
    **/
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     * 
    **/
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     * 
    **/
    distinct?: Enumerable<SpecializationScalarFieldEnum>
  }


  /**
   * Specialization findMany
   */
  export type SpecializationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * Filter, which Specializations to fetch.
     * 
    **/
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     * 
    **/
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specializations.
     * 
    **/
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SpecializationScalarFieldEnum>
  }


  /**
   * Specialization create
   */
  export type SpecializationCreateArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * The data needed to create a Specialization.
     * 
    **/
    data: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
  }


  /**
   * Specialization createMany
   */
  export type SpecializationCreateManyArgs = {
    /**
     * The data used to create many Specializations.
     * 
    **/
    data: Enumerable<SpecializationCreateManyInput>
  }


  /**
   * Specialization update
   */
  export type SpecializationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * The data needed to update a Specialization.
     * 
    **/
    data: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
    /**
     * Choose, which Specialization to update.
     * 
    **/
    where: SpecializationWhereUniqueInput
  }


  /**
   * Specialization updateMany
   */
  export type SpecializationUpdateManyArgs = {
    /**
     * The data used to update Specializations.
     * 
    **/
    data: XOR<SpecializationUpdateManyMutationInput, SpecializationUncheckedUpdateManyInput>
    /**
     * Filter which Specializations to update
     * 
    **/
    where?: SpecializationWhereInput
  }


  /**
   * Specialization upsert
   */
  export type SpecializationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * The filter to search for the Specialization to update in case it exists.
     * 
    **/
    where: SpecializationWhereUniqueInput
    /**
     * In case the Specialization found by the `where` argument doesn't exist, create a new Specialization with this data.
     * 
    **/
    create: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
    /**
     * In case the Specialization was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
  }


  /**
   * Specialization delete
   */
  export type SpecializationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
    /**
     * Filter which Specialization to delete.
     * 
    **/
    where: SpecializationWhereUniqueInput
  }


  /**
   * Specialization deleteMany
   */
  export type SpecializationDeleteManyArgs = {
    /**
     * Filter which Specializations to delete
     * 
    **/
    where?: SpecializationWhereInput
  }


  /**
   * Specialization findRaw
   */
  export type SpecializationFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Specialization aggregateRaw
   */
  export type SpecializationAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Specialization.Doctor
   */
  export type Specialization$DoctorArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DoctorInclude | null
    where?: DoctorWhereInput
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Specialization without action
   */
  export type SpecializationArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     * 
    **/
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpecializationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AppointmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    date: 'date',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    patientId: 'patientId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    calLink: 'calLink',
    calUserId: 'calUserId',
    userId: 'userId',
    specializationsIds: 'specializationsIds'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SpecializationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    doctorIds: 'doctorIds'
  };

  export type SpecializationScalarFieldEnum = (typeof SpecializationScalarFieldEnum)[keyof typeof SpecializationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    uniqueName: 'uniqueName',
    phoneNumber: 'phoneNumber',
    address: 'address',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    fullName?: StringFilter | string
    uniqueName?: StringFilter | string
    phoneNumber?: StringFilter | string
    address?: StringFilter | string
    role?: EnumRoleFilter | Role
    appointmentsAsAuthor?: AppointmentListRelationFilter
    appointmentsAsPatient?: AppointmentListRelationFilter
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
    appointmentsAsAuthor?: AppointmentOrderByRelationAggregateInput
    appointmentsAsPatient?: AppointmentOrderByRelationAggregateInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    uniqueName?: string
    phoneNumber?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    fullName?: StringWithAggregatesFilter | string
    uniqueName?: StringWithAggregatesFilter | string
    phoneNumber?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
  }

  export type AppointmentWhereInput = {
    AND?: Enumerable<AppointmentWhereInput>
    OR?: Enumerable<AppointmentWhereInput>
    NOT?: Enumerable<AppointmentWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    date?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: StringFilter | string
    patient?: XOR<UserRelationFilter, UserWhereInput>
    patientId?: StringFilter | string
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    date?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
    patient?: UserOrderByWithRelationInput
    patientId?: SortOrder
  }

  export type AppointmentWhereUniqueInput = {
    id?: string
  }

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    date?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    date?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    authorId?: StringWithAggregatesFilter | string
    patientId?: StringWithAggregatesFilter | string
  }

  export type DoctorWhereInput = {
    AND?: Enumerable<DoctorWhereInput>
    OR?: Enumerable<DoctorWhereInput>
    NOT?: Enumerable<DoctorWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    calLink?: StringFilter | string
    calUserId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    specializationsIds?: StringNullableListFilter
    specializations?: SpecializationListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calLink?: SortOrder
    calUserId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    specializationsIds?: SortOrder
    specializations?: SpecializationOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calLink?: SortOrder
    calUserId?: SortOrder
    userId?: SortOrder
    specializationsIds?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    OR?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    calLink?: StringWithAggregatesFilter | string
    calUserId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    specializationsIds?: StringNullableListFilter
  }

  export type SpecializationWhereInput = {
    AND?: Enumerable<SpecializationWhereInput>
    OR?: Enumerable<SpecializationWhereInput>
    NOT?: Enumerable<SpecializationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    doctorIds?: StringNullableListFilter
    Doctor?: DoctorListRelationFilter
  }

  export type SpecializationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    doctorIds?: SortOrder
    Doctor?: DoctorOrderByRelationAggregateInput
  }

  export type SpecializationWhereUniqueInput = {
    id?: string
  }

  export type SpecializationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    doctorIds?: SortOrder
    _count?: SpecializationCountOrderByAggregateInput
    _max?: SpecializationMaxOrderByAggregateInput
    _min?: SpecializationMinOrderByAggregateInput
  }

  export type SpecializationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SpecializationScalarWhereWithAggregatesInput>
    OR?: Enumerable<SpecializationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SpecializationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    doctorIds?: StringNullableListFilter
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsAuthor?: AppointmentCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsAuthor?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: AppointmentUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type AppointmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    author: UserCreateNestedOneWithoutAppointmentsAsAuthorInput
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    authorId: string
    patientId: string
  }

  export type AppointmentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutAppointmentsAsAuthorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    authorId: string
    patientId: string
  }

  export type AppointmentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    user: UserCreateNestedOneWithoutDoctorInput
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    userId: string
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    userId: string
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
  }

  export type DoctorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
  }

  export type DoctorUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
  }

  export type SpecializationCreateInput = {
    id?: string
    name: string
    description: string
    doctorIds?: SpecializationCreatedoctorIdsInput | Enumerable<string>
    Doctor?: DoctorCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecializationUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    doctorIds?: SpecializationCreatedoctorIdsInput | Enumerable<string>
    Doctor?: DoctorUncheckedCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecializationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: SpecializationUpdatedoctorIdsInput | Enumerable<string>
    Doctor?: DoctorUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecializationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: SpecializationUpdatedoctorIdsInput | Enumerable<string>
    Doctor?: DoctorUncheckedUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecializationCreateManyInput = {
    id?: string
    name: string
    description: string
    doctorIds?: SpecializationCreatedoctorIdsInput | Enumerable<string>
  }

  export type SpecializationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: SpecializationUpdatedoctorIdsInput | Enumerable<string>
  }

  export type SpecializationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: SpecializationUpdatedoctorIdsInput | Enumerable<string>
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type DoctorRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    date?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    date?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    date?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type SpecializationListRelationFilter = {
    every?: SpecializationWhereInput
    some?: SpecializationWhereInput
    none?: SpecializationWhereInput
  }

  export type SpecializationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calLink?: SortOrder
    calUserId?: SortOrder
    userId?: SortOrder
    specializationsIds?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    calUserId?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calLink?: SortOrder
    calUserId?: SortOrder
    userId?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calLink?: SortOrder
    calUserId?: SortOrder
    userId?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    calUserId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DoctorListRelationFilter = {
    every?: DoctorWhereInput
    some?: DoctorWhereInput
    none?: DoctorWhereInput
  }

  export type DoctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecializationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    doctorIds?: SortOrder
  }

  export type SpecializationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SpecializationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAuthorInput>, Enumerable<AppointmentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAuthorInput>
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutPatientInput>, Enumerable<AppointmentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutPatientInput>
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAuthorInput>, Enumerable<AppointmentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAuthorInput>
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutPatientInput>, Enumerable<AppointmentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutPatientInput>
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type AppointmentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAuthorInput>, Enumerable<AppointmentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutPatientInput>, Enumerable<AppointmentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAuthorInput>, Enumerable<AppointmentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutPatientInput>, Enumerable<AppointmentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAppointmentsAsAuthorInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsAuthorInput, UserUncheckedCreateWithoutAppointmentsAsAuthorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsAuthorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsAsPatientInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsPatientInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsAuthorNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsAuthorInput, UserUncheckedCreateWithoutAppointmentsAsAuthorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsAuthorInput
    upsert?: UserUpsertWithoutAppointmentsAsAuthorInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAppointmentsAsAuthorInput, UserUncheckedUpdateWithoutAppointmentsAsAuthorInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsPatientInput
    upsert?: UserUpsertWithoutAppointmentsAsPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAppointmentsAsPatientInput, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorCreatespecializationsIdsInput = {
    set: Enumerable<string>
  }

  export type SpecializationCreateNestedManyWithoutDoctorInput = {
    create?: XOR<Enumerable<SpecializationCreateWithoutDoctorInput>, Enumerable<SpecializationUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<SpecializationCreateOrConnectWithoutDoctorInput>
    connect?: Enumerable<SpecializationWhereUniqueInput>
  }

  export type SpecializationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<Enumerable<SpecializationCreateWithoutDoctorInput>, Enumerable<SpecializationUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<SpecializationCreateOrConnectWithoutDoctorInput>
    connect?: Enumerable<SpecializationWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorUpdatespecializationsIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type SpecializationUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<Enumerable<SpecializationCreateWithoutDoctorInput>, Enumerable<SpecializationUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<SpecializationCreateOrConnectWithoutDoctorInput>
    upsert?: Enumerable<SpecializationUpsertWithWhereUniqueWithoutDoctorInput>
    set?: Enumerable<SpecializationWhereUniqueInput>
    disconnect?: Enumerable<SpecializationWhereUniqueInput>
    delete?: Enumerable<SpecializationWhereUniqueInput>
    connect?: Enumerable<SpecializationWhereUniqueInput>
    update?: Enumerable<SpecializationUpdateWithWhereUniqueWithoutDoctorInput>
    updateMany?: Enumerable<SpecializationUpdateManyWithWhereWithoutDoctorInput>
    deleteMany?: Enumerable<SpecializationScalarWhereInput>
  }

  export type SpecializationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<Enumerable<SpecializationCreateWithoutDoctorInput>, Enumerable<SpecializationUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<SpecializationCreateOrConnectWithoutDoctorInput>
    upsert?: Enumerable<SpecializationUpsertWithWhereUniqueWithoutDoctorInput>
    set?: Enumerable<SpecializationWhereUniqueInput>
    disconnect?: Enumerable<SpecializationWhereUniqueInput>
    delete?: Enumerable<SpecializationWhereUniqueInput>
    connect?: Enumerable<SpecializationWhereUniqueInput>
    update?: Enumerable<SpecializationUpdateWithWhereUniqueWithoutDoctorInput>
    updateMany?: Enumerable<SpecializationUpdateManyWithWhereWithoutDoctorInput>
    deleteMany?: Enumerable<SpecializationScalarWhereInput>
  }

  export type SpecializationCreatedoctorIdsInput = {
    set: Enumerable<string>
  }

  export type DoctorCreateNestedManyWithoutSpecializationsInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutSpecializationsInput>, Enumerable<DoctorUncheckedCreateWithoutSpecializationsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutSpecializationsInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
  }

  export type DoctorUncheckedCreateNestedManyWithoutSpecializationsInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutSpecializationsInput>, Enumerable<DoctorUncheckedCreateWithoutSpecializationsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutSpecializationsInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
  }

  export type SpecializationUpdatedoctorIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type DoctorUpdateManyWithoutSpecializationsNestedInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutSpecializationsInput>, Enumerable<DoctorUncheckedCreateWithoutSpecializationsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutSpecializationsInput>
    upsert?: Enumerable<DoctorUpsertWithWhereUniqueWithoutSpecializationsInput>
    set?: Enumerable<DoctorWhereUniqueInput>
    disconnect?: Enumerable<DoctorWhereUniqueInput>
    delete?: Enumerable<DoctorWhereUniqueInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
    update?: Enumerable<DoctorUpdateWithWhereUniqueWithoutSpecializationsInput>
    updateMany?: Enumerable<DoctorUpdateManyWithWhereWithoutSpecializationsInput>
    deleteMany?: Enumerable<DoctorScalarWhereInput>
  }

  export type DoctorUncheckedUpdateManyWithoutSpecializationsNestedInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutSpecializationsInput>, Enumerable<DoctorUncheckedCreateWithoutSpecializationsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutSpecializationsInput>
    upsert?: Enumerable<DoctorUpsertWithWhereUniqueWithoutSpecializationsInput>
    set?: Enumerable<DoctorWhereUniqueInput>
    disconnect?: Enumerable<DoctorWhereUniqueInput>
    delete?: Enumerable<DoctorWhereUniqueInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
    update?: Enumerable<DoctorUpdateWithWhereUniqueWithoutSpecializationsInput>
    updateMany?: Enumerable<DoctorUpdateManyWithWhereWithoutSpecializationsInput>
    deleteMany?: Enumerable<DoctorScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type AppointmentCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
  }

  export type AppointmentUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    patientId: string
  }

  export type AppointmentCreateOrConnectWithoutAuthorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput>
  }

  export type AppointmentCreateManyAuthorInputEnvelope = {
    data: Enumerable<AppointmentCreateManyAuthorInput>
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    author: UserCreateNestedOneWithoutAppointmentsAsAuthorInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    authorId: string
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: Enumerable<AppointmentCreateManyPatientInput>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutAuthorInput, AppointmentUncheckedUpdateWithoutAuthorInput>
    create: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutAuthorInput, AppointmentUncheckedUpdateWithoutAuthorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutAuthorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAppointmentsAsAuthorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: Enumerable<AppointmentScalarWhereInput>
    OR?: Enumerable<AppointmentScalarWhereInput>
    NOT?: Enumerable<AppointmentScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    date?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    authorId?: StringFilter | string
    patientId?: StringFilter | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAppointmentsAsPatientInput>
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateWithoutAppointmentsAsAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsAuthorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsAuthorInput, UserUncheckedCreateWithoutAppointmentsAsAuthorInput>
  }

  export type UserCreateWithoutAppointmentsAsPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsAuthor?: AppointmentCreateNestedManyWithoutAuthorInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsAuthor?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
  }

  export type UserUpsertWithoutAppointmentsAsAuthorInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsAuthorInput, UserUncheckedUpdateWithoutAppointmentsAsAuthorInput>
    create: XOR<UserCreateWithoutAppointmentsAsAuthorInput, UserUncheckedCreateWithoutAppointmentsAsAuthorInput>
  }

  export type UserUpdateWithoutAppointmentsAsAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutAppointmentsAsPatientInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsPatientInput, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
    create: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
  }

  export type UserUpdateWithoutAppointmentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: AppointmentUpdateManyWithoutAuthorNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsAuthor?: AppointmentCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    role?: Role
    appointmentsAsAuthor?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type SpecializationCreateWithoutDoctorInput = {
    id?: string
    name: string
    description: string
    doctorIds?: SpecializationCreatedoctorIdsInput | Enumerable<string>
  }

  export type SpecializationUncheckedCreateWithoutDoctorInput = {
    id?: string
    name: string
    description: string
    doctorIds?: SpecializationCreatedoctorIdsInput | Enumerable<string>
  }

  export type SpecializationCreateOrConnectWithoutDoctorInput = {
    where: SpecializationWhereUniqueInput
    create: XOR<SpecializationCreateWithoutDoctorInput, SpecializationUncheckedCreateWithoutDoctorInput>
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: AppointmentUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type SpecializationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: SpecializationWhereUniqueInput
    update: XOR<SpecializationUpdateWithoutDoctorInput, SpecializationUncheckedUpdateWithoutDoctorInput>
    create: XOR<SpecializationCreateWithoutDoctorInput, SpecializationUncheckedCreateWithoutDoctorInput>
  }

  export type SpecializationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: SpecializationWhereUniqueInput
    data: XOR<SpecializationUpdateWithoutDoctorInput, SpecializationUncheckedUpdateWithoutDoctorInput>
  }

  export type SpecializationUpdateManyWithWhereWithoutDoctorInput = {
    where: SpecializationScalarWhereInput
    data: XOR<SpecializationUpdateManyMutationInput, SpecializationUncheckedUpdateManyWithoutSpecializationsInput>
  }

  export type SpecializationScalarWhereInput = {
    AND?: Enumerable<SpecializationScalarWhereInput>
    OR?: Enumerable<SpecializationScalarWhereInput>
    NOT?: Enumerable<SpecializationScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    doctorIds?: StringNullableListFilter
  }

  export type DoctorCreateWithoutSpecializationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    user: UserCreateNestedOneWithoutDoctorInput
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
  }

  export type DoctorUncheckedCreateWithoutSpecializationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    userId: string
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
  }

  export type DoctorCreateOrConnectWithoutSpecializationsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSpecializationsInput, DoctorUncheckedCreateWithoutSpecializationsInput>
  }

  export type DoctorUpsertWithWhereUniqueWithoutSpecializationsInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutSpecializationsInput, DoctorUncheckedUpdateWithoutSpecializationsInput>
    create: XOR<DoctorCreateWithoutSpecializationsInput, DoctorUncheckedCreateWithoutSpecializationsInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutSpecializationsInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutSpecializationsInput, DoctorUncheckedUpdateWithoutSpecializationsInput>
  }

  export type DoctorUpdateManyWithWhereWithoutSpecializationsInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorScalarWhereInput = {
    AND?: Enumerable<DoctorScalarWhereInput>
    OR?: Enumerable<DoctorScalarWhereInput>
    NOT?: Enumerable<DoctorScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    calLink?: StringFilter | string
    calUserId?: IntFilter | number
    userId?: StringFilter | string
    specializationsIds?: StringNullableListFilter
  }

  export type AppointmentCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    patientId: string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    date: Date | string
    title: string
    content?: string | null
    authorId: string
  }

  export type AppointmentUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUncheckedUpdateManyWithoutAppointmentsAsAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutAppointmentsAsAuthorNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUncheckedUpdateManyWithoutAppointmentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type SpecializationUpdateWithoutDoctorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: SpecializationUpdatedoctorIdsInput | Enumerable<string>
  }

  export type SpecializationUncheckedUpdateWithoutDoctorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: SpecializationUpdatedoctorIdsInput | Enumerable<string>
  }

  export type SpecializationUncheckedUpdateManyWithoutSpecializationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: SpecializationUpdatedoctorIdsInput | Enumerable<string>
  }

  export type DoctorUpdateWithoutSpecializationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
  }

  export type DoctorUncheckedUpdateWithoutSpecializationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
  }

  export type DoctorUncheckedUpdateManyWithoutDoctorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}