
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model PulseUser
 * 
 */
export type PulseUser = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  password: string
  fullName: string
  uniqueName: string
  phoneNumber: string
  address: string
  avatar: string | null
  role: Role
}

/**
 * Model ConsulationList
 * 
 */
export type ConsulationList = {
  id: string
  createdAt: Date
  updatedAt: Date
  content: Prisma.JsonValue | null
  authorId: string
  patientId: string
}

/**
 * Model ResearchDocument
 * 
 */
export type ResearchDocument = {
  id: string
  createdAt: Date
  updatedAt: Date
  content: Prisma.JsonValue | null
  authorId: string
  patientId: string
}

/**
 * Model Clinic
 * 
 */
export type Clinic = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  email: string
  address: string
  coverPhoto: string
  phoneNumber: string
  description: string
  doctorIds: string[]
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
  clinicId: string | null
  description: Prisma.JsonValue | null
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
 * Model FileEntity
 * 
 */
export type FileEntity = {
  id: string
  fileName: string
  fileUrl: string
  key: string
  authorId: string | null
  metadata: Prisma.JsonValue
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = {
  id: string
  name: string
  label: string | null
  company: string | null
  price: number[]
  photoUrls: string[]
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
 * // Fetch zero or more PulseUsers
 * const pulseUsers = await prisma.pulseUser.findMany()
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
   * // Fetch zero or more PulseUsers
   * const pulseUsers = await prisma.pulseUser.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

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
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.pulseUser`: Exposes CRUD operations for the **PulseUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PulseUsers
    * const pulseUsers = await prisma.pulseUser.findMany()
    * ```
    */
  get pulseUser(): Prisma.PulseUserDelegate<GlobalReject>;

  /**
   * `prisma.consulationList`: Exposes CRUD operations for the **ConsulationList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsulationLists
    * const consulationLists = await prisma.consulationList.findMany()
    * ```
    */
  get consulationList(): Prisma.ConsulationListDelegate<GlobalReject>;

  /**
   * `prisma.researchDocument`: Exposes CRUD operations for the **ResearchDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchDocuments
    * const researchDocuments = await prisma.researchDocument.findMany()
    * ```
    */
  get researchDocument(): Prisma.ResearchDocumentDelegate<GlobalReject>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **Clinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinic.findMany()
    * ```
    */
  get clinic(): Prisma.ClinicDelegate<GlobalReject>;

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

  /**
   * `prisma.fileEntity`: Exposes CRUD operations for the **FileEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileEntities
    * const fileEntities = await prisma.fileEntity.findMany()
    * ```
    */
  get fileEntity(): Prisma.FileEntityDelegate<GlobalReject>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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


  export const ModelName: {
    PulseUser: 'PulseUser',
    ConsulationList: 'ConsulationList',
    ResearchDocument: 'ResearchDocument',
    Clinic: 'Clinic',
    Doctor: 'Doctor',
    Specialization: 'Specialization',
    FileEntity: 'FileEntity',
    Pharmacy: 'Pharmacy'
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
   * Count Type PulseUserCountOutputType
   */


  export type PulseUserCountOutputType = {
    appointmentsAsAuthor: number
    appointmentsAsPatient: number
    researchDocumentsAsAuthour: number
    researchDocumentsAsPatient: number
    authoredFiles: number
  }

  export type PulseUserCountOutputTypeSelect = {
    appointmentsAsAuthor?: boolean
    appointmentsAsPatient?: boolean
    researchDocumentsAsAuthour?: boolean
    researchDocumentsAsPatient?: boolean
    authoredFiles?: boolean
  }

  export type PulseUserCountOutputTypeGetPayload<S extends boolean | null | undefined | PulseUserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PulseUserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PulseUserCountOutputTypeArgs)
    ? PulseUserCountOutputType 
    : S extends { select: any } & (PulseUserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PulseUserCountOutputType ? PulseUserCountOutputType[P] : never
  } 
      : PulseUserCountOutputType




  // Custom InputTypes

  /**
   * PulseUserCountOutputType without action
   */
  export type PulseUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PulseUserCountOutputType
     */
    select?: PulseUserCountOutputTypeSelect | null
  }



  /**
   * Count Type ClinicCountOutputType
   */


  export type ClinicCountOutputType = {
    doctors: number
  }

  export type ClinicCountOutputTypeSelect = {
    doctors?: boolean
  }

  export type ClinicCountOutputTypeGetPayload<S extends boolean | null | undefined | ClinicCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClinicCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ClinicCountOutputTypeArgs)
    ? ClinicCountOutputType 
    : S extends { select: any } & (ClinicCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ClinicCountOutputType ? ClinicCountOutputType[P] : never
  } 
      : ClinicCountOutputType




  // Custom InputTypes

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect | null
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
     */
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
     */
    select?: SpecializationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model PulseUser
   */


  export type AggregatePulseUser = {
    _count: PulseUserCountAggregateOutputType | null
    _min: PulseUserMinAggregateOutputType | null
    _max: PulseUserMaxAggregateOutputType | null
  }

  export type PulseUserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    fullName: string | null
    uniqueName: string | null
    phoneNumber: string | null
    address: string | null
    avatar: string | null
    role: Role | null
  }

  export type PulseUserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    fullName: string | null
    uniqueName: string | null
    phoneNumber: string | null
    address: string | null
    avatar: string | null
    role: Role | null
  }

  export type PulseUserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    fullName: number
    uniqueName: number
    phoneNumber: number
    address: number
    avatar: number
    role: number
    _all: number
  }


  export type PulseUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fullName?: true
    uniqueName?: true
    phoneNumber?: true
    address?: true
    avatar?: true
    role?: true
  }

  export type PulseUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fullName?: true
    uniqueName?: true
    phoneNumber?: true
    address?: true
    avatar?: true
    role?: true
  }

  export type PulseUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fullName?: true
    uniqueName?: true
    phoneNumber?: true
    address?: true
    avatar?: true
    role?: true
    _all?: true
  }

  export type PulseUserAggregateArgs = {
    /**
     * Filter which PulseUser to aggregate.
     */
    where?: PulseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PulseUsers to fetch.
     */
    orderBy?: Enumerable<PulseUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PulseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PulseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PulseUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PulseUsers
    **/
    _count?: true | PulseUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PulseUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PulseUserMaxAggregateInputType
  }

  export type GetPulseUserAggregateType<T extends PulseUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePulseUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePulseUser[P]>
      : GetScalarType<T[P], AggregatePulseUser[P]>
  }




  export type PulseUserGroupByArgs = {
    where?: PulseUserWhereInput
    orderBy?: Enumerable<PulseUserOrderByWithAggregationInput>
    by: PulseUserScalarFieldEnum[]
    having?: PulseUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PulseUserCountAggregateInputType | true
    _min?: PulseUserMinAggregateInputType
    _max?: PulseUserMaxAggregateInputType
  }


  export type PulseUserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar: string | null
    role: Role
    _count: PulseUserCountAggregateOutputType | null
    _min: PulseUserMinAggregateOutputType | null
    _max: PulseUserMaxAggregateOutputType | null
  }

  type GetPulseUserGroupByPayload<T extends PulseUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PulseUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PulseUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PulseUserGroupByOutputType[P]>
            : GetScalarType<T[P], PulseUserGroupByOutputType[P]>
        }
      >
    >


  export type PulseUserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    uniqueName?: boolean
    phoneNumber?: boolean
    address?: boolean
    avatar?: boolean
    role?: boolean
    appointmentsAsAuthor?: boolean | PulseUser$appointmentsAsAuthorArgs
    appointmentsAsPatient?: boolean | PulseUser$appointmentsAsPatientArgs
    researchDocumentsAsAuthour?: boolean | PulseUser$researchDocumentsAsAuthourArgs
    researchDocumentsAsPatient?: boolean | PulseUser$researchDocumentsAsPatientArgs
    doctor?: boolean | DoctorArgs
    authoredFiles?: boolean | PulseUser$authoredFilesArgs
    _count?: boolean | PulseUserCountOutputTypeArgs
  }


  export type PulseUserInclude = {
    appointmentsAsAuthor?: boolean | PulseUser$appointmentsAsAuthorArgs
    appointmentsAsPatient?: boolean | PulseUser$appointmentsAsPatientArgs
    researchDocumentsAsAuthour?: boolean | PulseUser$researchDocumentsAsAuthourArgs
    researchDocumentsAsPatient?: boolean | PulseUser$researchDocumentsAsPatientArgs
    doctor?: boolean | DoctorArgs
    authoredFiles?: boolean | PulseUser$authoredFilesArgs
    _count?: boolean | PulseUserCountOutputTypeArgs
  }

  export type PulseUserGetPayload<S extends boolean | null | undefined | PulseUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PulseUser :
    S extends undefined ? never :
    S extends { include: any } & (PulseUserArgs | PulseUserFindManyArgs)
    ? PulseUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'appointmentsAsAuthor' ? Array < ConsulationListGetPayload<S['include'][P]>>  :
        P extends 'appointmentsAsPatient' ? Array < ConsulationListGetPayload<S['include'][P]>>  :
        P extends 'researchDocumentsAsAuthour' ? Array < ResearchDocumentGetPayload<S['include'][P]>>  :
        P extends 'researchDocumentsAsPatient' ? Array < ResearchDocumentGetPayload<S['include'][P]>>  :
        P extends 'doctor' ? DoctorGetPayload<S['include'][P]> | null :
        P extends 'authoredFiles' ? Array < FileEntityGetPayload<S['include'][P]>>  :
        P extends '_count' ? PulseUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PulseUserArgs | PulseUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'appointmentsAsAuthor' ? Array < ConsulationListGetPayload<S['select'][P]>>  :
        P extends 'appointmentsAsPatient' ? Array < ConsulationListGetPayload<S['select'][P]>>  :
        P extends 'researchDocumentsAsAuthour' ? Array < ResearchDocumentGetPayload<S['select'][P]>>  :
        P extends 'researchDocumentsAsPatient' ? Array < ResearchDocumentGetPayload<S['select'][P]>>  :
        P extends 'doctor' ? DoctorGetPayload<S['select'][P]> | null :
        P extends 'authoredFiles' ? Array < FileEntityGetPayload<S['select'][P]>>  :
        P extends '_count' ? PulseUserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PulseUser ? PulseUser[P] : never
  } 
      : PulseUser


  type PulseUserCountArgs = 
    Omit<PulseUserFindManyArgs, 'select' | 'include'> & {
      select?: PulseUserCountAggregateInputType | true
    }

  export interface PulseUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PulseUser that matches the filter.
     * @param {PulseUserFindUniqueArgs} args - Arguments to find a PulseUser
     * @example
     * // Get one PulseUser
     * const pulseUser = await prisma.pulseUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PulseUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PulseUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PulseUser'> extends True ? Prisma__PulseUserClient<PulseUserGetPayload<T>> : Prisma__PulseUserClient<PulseUserGetPayload<T> | null, null>

    /**
     * Find one PulseUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PulseUserFindUniqueOrThrowArgs} args - Arguments to find a PulseUser
     * @example
     * // Get one PulseUser
     * const pulseUser = await prisma.pulseUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PulseUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PulseUserFindUniqueOrThrowArgs>
    ): Prisma__PulseUserClient<PulseUserGetPayload<T>>

    /**
     * Find the first PulseUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PulseUserFindFirstArgs} args - Arguments to find a PulseUser
     * @example
     * // Get one PulseUser
     * const pulseUser = await prisma.pulseUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PulseUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PulseUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PulseUser'> extends True ? Prisma__PulseUserClient<PulseUserGetPayload<T>> : Prisma__PulseUserClient<PulseUserGetPayload<T> | null, null>

    /**
     * Find the first PulseUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PulseUserFindFirstOrThrowArgs} args - Arguments to find a PulseUser
     * @example
     * // Get one PulseUser
     * const pulseUser = await prisma.pulseUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PulseUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PulseUserFindFirstOrThrowArgs>
    ): Prisma__PulseUserClient<PulseUserGetPayload<T>>

    /**
     * Find zero or more PulseUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PulseUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PulseUsers
     * const pulseUsers = await prisma.pulseUser.findMany()
     * 
     * // Get first 10 PulseUsers
     * const pulseUsers = await prisma.pulseUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pulseUserWithIdOnly = await prisma.pulseUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PulseUserFindManyArgs>(
      args?: SelectSubset<T, PulseUserFindManyArgs>
    ): Prisma.PrismaPromise<Array<PulseUserGetPayload<T>>>

    /**
     * Create a PulseUser.
     * @param {PulseUserCreateArgs} args - Arguments to create a PulseUser.
     * @example
     * // Create one PulseUser
     * const PulseUser = await prisma.pulseUser.create({
     *   data: {
     *     // ... data to create a PulseUser
     *   }
     * })
     * 
    **/
    create<T extends PulseUserCreateArgs>(
      args: SelectSubset<T, PulseUserCreateArgs>
    ): Prisma__PulseUserClient<PulseUserGetPayload<T>>

    /**
     * Create many PulseUsers.
     *     @param {PulseUserCreateManyArgs} args - Arguments to create many PulseUsers.
     *     @example
     *     // Create many PulseUsers
     *     const pulseUser = await prisma.pulseUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PulseUserCreateManyArgs>(
      args?: SelectSubset<T, PulseUserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PulseUser.
     * @param {PulseUserDeleteArgs} args - Arguments to delete one PulseUser.
     * @example
     * // Delete one PulseUser
     * const PulseUser = await prisma.pulseUser.delete({
     *   where: {
     *     // ... filter to delete one PulseUser
     *   }
     * })
     * 
    **/
    delete<T extends PulseUserDeleteArgs>(
      args: SelectSubset<T, PulseUserDeleteArgs>
    ): Prisma__PulseUserClient<PulseUserGetPayload<T>>

    /**
     * Update one PulseUser.
     * @param {PulseUserUpdateArgs} args - Arguments to update one PulseUser.
     * @example
     * // Update one PulseUser
     * const pulseUser = await prisma.pulseUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PulseUserUpdateArgs>(
      args: SelectSubset<T, PulseUserUpdateArgs>
    ): Prisma__PulseUserClient<PulseUserGetPayload<T>>

    /**
     * Delete zero or more PulseUsers.
     * @param {PulseUserDeleteManyArgs} args - Arguments to filter PulseUsers to delete.
     * @example
     * // Delete a few PulseUsers
     * const { count } = await prisma.pulseUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PulseUserDeleteManyArgs>(
      args?: SelectSubset<T, PulseUserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PulseUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PulseUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PulseUsers
     * const pulseUser = await prisma.pulseUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PulseUserUpdateManyArgs>(
      args: SelectSubset<T, PulseUserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PulseUser.
     * @param {PulseUserUpsertArgs} args - Arguments to update or create a PulseUser.
     * @example
     * // Update or create a PulseUser
     * const pulseUser = await prisma.pulseUser.upsert({
     *   create: {
     *     // ... data to create a PulseUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PulseUser we want to update
     *   }
     * })
    **/
    upsert<T extends PulseUserUpsertArgs>(
      args: SelectSubset<T, PulseUserUpsertArgs>
    ): Prisma__PulseUserClient<PulseUserGetPayload<T>>

    /**
     * Find zero or more PulseUsers that matches the filter.
     * @param {PulseUserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pulseUser = await prisma.pulseUser.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PulseUserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PulseUser.
     * @param {PulseUserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pulseUser = await prisma.pulseUser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PulseUserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PulseUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PulseUserCountArgs} args - Arguments to filter PulseUsers to count.
     * @example
     * // Count the number of PulseUsers
     * const count = await prisma.pulseUser.count({
     *   where: {
     *     // ... the filter for the PulseUsers we want to count
     *   }
     * })
    **/
    count<T extends PulseUserCountArgs>(
      args?: Subset<T, PulseUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PulseUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PulseUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PulseUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PulseUserAggregateArgs>(args: Subset<T, PulseUserAggregateArgs>): Prisma.PrismaPromise<GetPulseUserAggregateType<T>>

    /**
     * Group by PulseUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PulseUserGroupByArgs} args - Group by arguments.
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
      T extends PulseUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PulseUserGroupByArgs['orderBy'] }
        : { orderBy?: PulseUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PulseUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPulseUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PulseUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PulseUserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    appointmentsAsAuthor<T extends PulseUser$appointmentsAsAuthorArgs= {}>(args?: Subset<T, PulseUser$appointmentsAsAuthorArgs>): Prisma.PrismaPromise<Array<ConsulationListGetPayload<T>>| Null>;

    appointmentsAsPatient<T extends PulseUser$appointmentsAsPatientArgs= {}>(args?: Subset<T, PulseUser$appointmentsAsPatientArgs>): Prisma.PrismaPromise<Array<ConsulationListGetPayload<T>>| Null>;

    researchDocumentsAsAuthour<T extends PulseUser$researchDocumentsAsAuthourArgs= {}>(args?: Subset<T, PulseUser$researchDocumentsAsAuthourArgs>): Prisma.PrismaPromise<Array<ResearchDocumentGetPayload<T>>| Null>;

    researchDocumentsAsPatient<T extends PulseUser$researchDocumentsAsPatientArgs= {}>(args?: Subset<T, PulseUser$researchDocumentsAsPatientArgs>): Prisma.PrismaPromise<Array<ResearchDocumentGetPayload<T>>| Null>;

    doctor<T extends DoctorArgs= {}>(args?: Subset<T, DoctorArgs>): Prisma__DoctorClient<DoctorGetPayload<T> | Null>;

    authoredFiles<T extends PulseUser$authoredFilesArgs= {}>(args?: Subset<T, PulseUser$authoredFilesArgs>): Prisma.PrismaPromise<Array<FileEntityGetPayload<T>>| Null>;

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
   * PulseUser base type for findUnique actions
   */
  export type PulseUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * Filter, which PulseUser to fetch.
     */
    where: PulseUserWhereUniqueInput
  }

  /**
   * PulseUser findUnique
   */
  export interface PulseUserFindUniqueArgs extends PulseUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PulseUser findUniqueOrThrow
   */
  export type PulseUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * Filter, which PulseUser to fetch.
     */
    where: PulseUserWhereUniqueInput
  }


  /**
   * PulseUser base type for findFirst actions
   */
  export type PulseUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * Filter, which PulseUser to fetch.
     */
    where?: PulseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PulseUsers to fetch.
     */
    orderBy?: Enumerable<PulseUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PulseUsers.
     */
    cursor?: PulseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PulseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PulseUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PulseUsers.
     */
    distinct?: Enumerable<PulseUserScalarFieldEnum>
  }

  /**
   * PulseUser findFirst
   */
  export interface PulseUserFindFirstArgs extends PulseUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PulseUser findFirstOrThrow
   */
  export type PulseUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * Filter, which PulseUser to fetch.
     */
    where?: PulseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PulseUsers to fetch.
     */
    orderBy?: Enumerable<PulseUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PulseUsers.
     */
    cursor?: PulseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PulseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PulseUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PulseUsers.
     */
    distinct?: Enumerable<PulseUserScalarFieldEnum>
  }


  /**
   * PulseUser findMany
   */
  export type PulseUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * Filter, which PulseUsers to fetch.
     */
    where?: PulseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PulseUsers to fetch.
     */
    orderBy?: Enumerable<PulseUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PulseUsers.
     */
    cursor?: PulseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PulseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PulseUsers.
     */
    skip?: number
    distinct?: Enumerable<PulseUserScalarFieldEnum>
  }


  /**
   * PulseUser create
   */
  export type PulseUserCreateArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * The data needed to create a PulseUser.
     */
    data: XOR<PulseUserCreateInput, PulseUserUncheckedCreateInput>
  }


  /**
   * PulseUser createMany
   */
  export type PulseUserCreateManyArgs = {
    /**
     * The data used to create many PulseUsers.
     */
    data: Enumerable<PulseUserCreateManyInput>
  }


  /**
   * PulseUser update
   */
  export type PulseUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * The data needed to update a PulseUser.
     */
    data: XOR<PulseUserUpdateInput, PulseUserUncheckedUpdateInput>
    /**
     * Choose, which PulseUser to update.
     */
    where: PulseUserWhereUniqueInput
  }


  /**
   * PulseUser updateMany
   */
  export type PulseUserUpdateManyArgs = {
    /**
     * The data used to update PulseUsers.
     */
    data: XOR<PulseUserUpdateManyMutationInput, PulseUserUncheckedUpdateManyInput>
    /**
     * Filter which PulseUsers to update
     */
    where?: PulseUserWhereInput
  }


  /**
   * PulseUser upsert
   */
  export type PulseUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * The filter to search for the PulseUser to update in case it exists.
     */
    where: PulseUserWhereUniqueInput
    /**
     * In case the PulseUser found by the `where` argument doesn't exist, create a new PulseUser with this data.
     */
    create: XOR<PulseUserCreateInput, PulseUserUncheckedCreateInput>
    /**
     * In case the PulseUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PulseUserUpdateInput, PulseUserUncheckedUpdateInput>
  }


  /**
   * PulseUser delete
   */
  export type PulseUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
    /**
     * Filter which PulseUser to delete.
     */
    where: PulseUserWhereUniqueInput
  }


  /**
   * PulseUser deleteMany
   */
  export type PulseUserDeleteManyArgs = {
    /**
     * Filter which PulseUsers to delete
     */
    where?: PulseUserWhereInput
  }


  /**
   * PulseUser findRaw
   */
  export type PulseUserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PulseUser aggregateRaw
   */
  export type PulseUserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PulseUser.appointmentsAsAuthor
   */
  export type PulseUser$appointmentsAsAuthorArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    where?: ConsulationListWhereInput
    orderBy?: Enumerable<ConsulationListOrderByWithRelationInput>
    cursor?: ConsulationListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ConsulationListScalarFieldEnum>
  }


  /**
   * PulseUser.appointmentsAsPatient
   */
  export type PulseUser$appointmentsAsPatientArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    where?: ConsulationListWhereInput
    orderBy?: Enumerable<ConsulationListOrderByWithRelationInput>
    cursor?: ConsulationListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ConsulationListScalarFieldEnum>
  }


  /**
   * PulseUser.researchDocumentsAsAuthour
   */
  export type PulseUser$researchDocumentsAsAuthourArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    where?: ResearchDocumentWhereInput
    orderBy?: Enumerable<ResearchDocumentOrderByWithRelationInput>
    cursor?: ResearchDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResearchDocumentScalarFieldEnum>
  }


  /**
   * PulseUser.researchDocumentsAsPatient
   */
  export type PulseUser$researchDocumentsAsPatientArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    where?: ResearchDocumentWhereInput
    orderBy?: Enumerable<ResearchDocumentOrderByWithRelationInput>
    cursor?: ResearchDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResearchDocumentScalarFieldEnum>
  }


  /**
   * PulseUser.authoredFiles
   */
  export type PulseUser$authoredFilesArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    where?: FileEntityWhereInput
    orderBy?: Enumerable<FileEntityOrderByWithRelationInput>
    cursor?: FileEntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FileEntityScalarFieldEnum>
  }


  /**
   * PulseUser without action
   */
  export type PulseUserArgs = {
    /**
     * Select specific fields to fetch from the PulseUser
     */
    select?: PulseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PulseUserInclude | null
  }



  /**
   * Model ConsulationList
   */


  export type AggregateConsulationList = {
    _count: ConsulationListCountAggregateOutputType | null
    _min: ConsulationListMinAggregateOutputType | null
    _max: ConsulationListMaxAggregateOutputType | null
  }

  export type ConsulationListMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    patientId: string | null
  }

  export type ConsulationListMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    patientId: string | null
  }

  export type ConsulationListCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    authorId: number
    patientId: number
    _all: number
  }


  export type ConsulationListMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    patientId?: true
  }

  export type ConsulationListMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    patientId?: true
  }

  export type ConsulationListCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    authorId?: true
    patientId?: true
    _all?: true
  }

  export type ConsulationListAggregateArgs = {
    /**
     * Filter which ConsulationList to aggregate.
     */
    where?: ConsulationListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsulationLists to fetch.
     */
    orderBy?: Enumerable<ConsulationListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsulationListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsulationLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsulationLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsulationLists
    **/
    _count?: true | ConsulationListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsulationListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsulationListMaxAggregateInputType
  }

  export type GetConsulationListAggregateType<T extends ConsulationListAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulationList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulationList[P]>
      : GetScalarType<T[P], AggregateConsulationList[P]>
  }




  export type ConsulationListGroupByArgs = {
    where?: ConsulationListWhereInput
    orderBy?: Enumerable<ConsulationListOrderByWithAggregationInput>
    by: ConsulationListScalarFieldEnum[]
    having?: ConsulationListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsulationListCountAggregateInputType | true
    _min?: ConsulationListMinAggregateInputType
    _max?: ConsulationListMaxAggregateInputType
  }


  export type ConsulationListGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    content: JsonValue | null
    authorId: string
    patientId: string
    _count: ConsulationListCountAggregateOutputType | null
    _min: ConsulationListMinAggregateOutputType | null
    _max: ConsulationListMaxAggregateOutputType | null
  }

  type GetConsulationListGroupByPayload<T extends ConsulationListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ConsulationListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsulationListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsulationListGroupByOutputType[P]>
            : GetScalarType<T[P], ConsulationListGroupByOutputType[P]>
        }
      >
    >


  export type ConsulationListSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    author?: boolean | PulseUserArgs
    authorId?: boolean
    patient?: boolean | PulseUserArgs
    patientId?: boolean
  }


  export type ConsulationListInclude = {
    author?: boolean | PulseUserArgs
    patient?: boolean | PulseUserArgs
  }

  export type ConsulationListGetPayload<S extends boolean | null | undefined | ConsulationListArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ConsulationList :
    S extends undefined ? never :
    S extends { include: any } & (ConsulationListArgs | ConsulationListFindManyArgs)
    ? ConsulationList  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? PulseUserGetPayload<S['include'][P]> :
        P extends 'patient' ? PulseUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ConsulationListArgs | ConsulationListFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? PulseUserGetPayload<S['select'][P]> :
        P extends 'patient' ? PulseUserGetPayload<S['select'][P]> :  P extends keyof ConsulationList ? ConsulationList[P] : never
  } 
      : ConsulationList


  type ConsulationListCountArgs = 
    Omit<ConsulationListFindManyArgs, 'select' | 'include'> & {
      select?: ConsulationListCountAggregateInputType | true
    }

  export interface ConsulationListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ConsulationList that matches the filter.
     * @param {ConsulationListFindUniqueArgs} args - Arguments to find a ConsulationList
     * @example
     * // Get one ConsulationList
     * const consulationList = await prisma.consulationList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConsulationListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ConsulationListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ConsulationList'> extends True ? Prisma__ConsulationListClient<ConsulationListGetPayload<T>> : Prisma__ConsulationListClient<ConsulationListGetPayload<T> | null, null>

    /**
     * Find one ConsulationList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConsulationListFindUniqueOrThrowArgs} args - Arguments to find a ConsulationList
     * @example
     * // Get one ConsulationList
     * const consulationList = await prisma.consulationList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConsulationListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ConsulationListFindUniqueOrThrowArgs>
    ): Prisma__ConsulationListClient<ConsulationListGetPayload<T>>

    /**
     * Find the first ConsulationList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsulationListFindFirstArgs} args - Arguments to find a ConsulationList
     * @example
     * // Get one ConsulationList
     * const consulationList = await prisma.consulationList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConsulationListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ConsulationListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ConsulationList'> extends True ? Prisma__ConsulationListClient<ConsulationListGetPayload<T>> : Prisma__ConsulationListClient<ConsulationListGetPayload<T> | null, null>

    /**
     * Find the first ConsulationList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsulationListFindFirstOrThrowArgs} args - Arguments to find a ConsulationList
     * @example
     * // Get one ConsulationList
     * const consulationList = await prisma.consulationList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConsulationListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ConsulationListFindFirstOrThrowArgs>
    ): Prisma__ConsulationListClient<ConsulationListGetPayload<T>>

    /**
     * Find zero or more ConsulationLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsulationListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsulationLists
     * const consulationLists = await prisma.consulationList.findMany()
     * 
     * // Get first 10 ConsulationLists
     * const consulationLists = await prisma.consulationList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consulationListWithIdOnly = await prisma.consulationList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConsulationListFindManyArgs>(
      args?: SelectSubset<T, ConsulationListFindManyArgs>
    ): Prisma.PrismaPromise<Array<ConsulationListGetPayload<T>>>

    /**
     * Create a ConsulationList.
     * @param {ConsulationListCreateArgs} args - Arguments to create a ConsulationList.
     * @example
     * // Create one ConsulationList
     * const ConsulationList = await prisma.consulationList.create({
     *   data: {
     *     // ... data to create a ConsulationList
     *   }
     * })
     * 
    **/
    create<T extends ConsulationListCreateArgs>(
      args: SelectSubset<T, ConsulationListCreateArgs>
    ): Prisma__ConsulationListClient<ConsulationListGetPayload<T>>

    /**
     * Create many ConsulationLists.
     *     @param {ConsulationListCreateManyArgs} args - Arguments to create many ConsulationLists.
     *     @example
     *     // Create many ConsulationLists
     *     const consulationList = await prisma.consulationList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConsulationListCreateManyArgs>(
      args?: SelectSubset<T, ConsulationListCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConsulationList.
     * @param {ConsulationListDeleteArgs} args - Arguments to delete one ConsulationList.
     * @example
     * // Delete one ConsulationList
     * const ConsulationList = await prisma.consulationList.delete({
     *   where: {
     *     // ... filter to delete one ConsulationList
     *   }
     * })
     * 
    **/
    delete<T extends ConsulationListDeleteArgs>(
      args: SelectSubset<T, ConsulationListDeleteArgs>
    ): Prisma__ConsulationListClient<ConsulationListGetPayload<T>>

    /**
     * Update one ConsulationList.
     * @param {ConsulationListUpdateArgs} args - Arguments to update one ConsulationList.
     * @example
     * // Update one ConsulationList
     * const consulationList = await prisma.consulationList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConsulationListUpdateArgs>(
      args: SelectSubset<T, ConsulationListUpdateArgs>
    ): Prisma__ConsulationListClient<ConsulationListGetPayload<T>>

    /**
     * Delete zero or more ConsulationLists.
     * @param {ConsulationListDeleteManyArgs} args - Arguments to filter ConsulationLists to delete.
     * @example
     * // Delete a few ConsulationLists
     * const { count } = await prisma.consulationList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConsulationListDeleteManyArgs>(
      args?: SelectSubset<T, ConsulationListDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsulationLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsulationListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsulationLists
     * const consulationList = await prisma.consulationList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConsulationListUpdateManyArgs>(
      args: SelectSubset<T, ConsulationListUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConsulationList.
     * @param {ConsulationListUpsertArgs} args - Arguments to update or create a ConsulationList.
     * @example
     * // Update or create a ConsulationList
     * const consulationList = await prisma.consulationList.upsert({
     *   create: {
     *     // ... data to create a ConsulationList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsulationList we want to update
     *   }
     * })
    **/
    upsert<T extends ConsulationListUpsertArgs>(
      args: SelectSubset<T, ConsulationListUpsertArgs>
    ): Prisma__ConsulationListClient<ConsulationListGetPayload<T>>

    /**
     * Find zero or more ConsulationLists that matches the filter.
     * @param {ConsulationListFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const consulationList = await prisma.consulationList.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ConsulationListFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ConsulationList.
     * @param {ConsulationListAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const consulationList = await prisma.consulationList.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ConsulationListAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ConsulationLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsulationListCountArgs} args - Arguments to filter ConsulationLists to count.
     * @example
     * // Count the number of ConsulationLists
     * const count = await prisma.consulationList.count({
     *   where: {
     *     // ... the filter for the ConsulationLists we want to count
     *   }
     * })
    **/
    count<T extends ConsulationListCountArgs>(
      args?: Subset<T, ConsulationListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsulationListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsulationList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsulationListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsulationListAggregateArgs>(args: Subset<T, ConsulationListAggregateArgs>): Prisma.PrismaPromise<GetConsulationListAggregateType<T>>

    /**
     * Group by ConsulationList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsulationListGroupByArgs} args - Group by arguments.
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
      T extends ConsulationListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsulationListGroupByArgs['orderBy'] }
        : { orderBy?: ConsulationListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsulationListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsulationListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsulationList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ConsulationListClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends PulseUserArgs= {}>(args?: Subset<T, PulseUserArgs>): Prisma__PulseUserClient<PulseUserGetPayload<T> | Null>;

    patient<T extends PulseUserArgs= {}>(args?: Subset<T, PulseUserArgs>): Prisma__PulseUserClient<PulseUserGetPayload<T> | Null>;

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
   * ConsulationList base type for findUnique actions
   */
  export type ConsulationListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * Filter, which ConsulationList to fetch.
     */
    where: ConsulationListWhereUniqueInput
  }

  /**
   * ConsulationList findUnique
   */
  export interface ConsulationListFindUniqueArgs extends ConsulationListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ConsulationList findUniqueOrThrow
   */
  export type ConsulationListFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * Filter, which ConsulationList to fetch.
     */
    where: ConsulationListWhereUniqueInput
  }


  /**
   * ConsulationList base type for findFirst actions
   */
  export type ConsulationListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * Filter, which ConsulationList to fetch.
     */
    where?: ConsulationListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsulationLists to fetch.
     */
    orderBy?: Enumerable<ConsulationListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsulationLists.
     */
    cursor?: ConsulationListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsulationLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsulationLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsulationLists.
     */
    distinct?: Enumerable<ConsulationListScalarFieldEnum>
  }

  /**
   * ConsulationList findFirst
   */
  export interface ConsulationListFindFirstArgs extends ConsulationListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ConsulationList findFirstOrThrow
   */
  export type ConsulationListFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * Filter, which ConsulationList to fetch.
     */
    where?: ConsulationListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsulationLists to fetch.
     */
    orderBy?: Enumerable<ConsulationListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsulationLists.
     */
    cursor?: ConsulationListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsulationLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsulationLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsulationLists.
     */
    distinct?: Enumerable<ConsulationListScalarFieldEnum>
  }


  /**
   * ConsulationList findMany
   */
  export type ConsulationListFindManyArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * Filter, which ConsulationLists to fetch.
     */
    where?: ConsulationListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsulationLists to fetch.
     */
    orderBy?: Enumerable<ConsulationListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsulationLists.
     */
    cursor?: ConsulationListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsulationLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsulationLists.
     */
    skip?: number
    distinct?: Enumerable<ConsulationListScalarFieldEnum>
  }


  /**
   * ConsulationList create
   */
  export type ConsulationListCreateArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * The data needed to create a ConsulationList.
     */
    data: XOR<ConsulationListCreateInput, ConsulationListUncheckedCreateInput>
  }


  /**
   * ConsulationList createMany
   */
  export type ConsulationListCreateManyArgs = {
    /**
     * The data used to create many ConsulationLists.
     */
    data: Enumerable<ConsulationListCreateManyInput>
  }


  /**
   * ConsulationList update
   */
  export type ConsulationListUpdateArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * The data needed to update a ConsulationList.
     */
    data: XOR<ConsulationListUpdateInput, ConsulationListUncheckedUpdateInput>
    /**
     * Choose, which ConsulationList to update.
     */
    where: ConsulationListWhereUniqueInput
  }


  /**
   * ConsulationList updateMany
   */
  export type ConsulationListUpdateManyArgs = {
    /**
     * The data used to update ConsulationLists.
     */
    data: XOR<ConsulationListUpdateManyMutationInput, ConsulationListUncheckedUpdateManyInput>
    /**
     * Filter which ConsulationLists to update
     */
    where?: ConsulationListWhereInput
  }


  /**
   * ConsulationList upsert
   */
  export type ConsulationListUpsertArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * The filter to search for the ConsulationList to update in case it exists.
     */
    where: ConsulationListWhereUniqueInput
    /**
     * In case the ConsulationList found by the `where` argument doesn't exist, create a new ConsulationList with this data.
     */
    create: XOR<ConsulationListCreateInput, ConsulationListUncheckedCreateInput>
    /**
     * In case the ConsulationList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsulationListUpdateInput, ConsulationListUncheckedUpdateInput>
  }


  /**
   * ConsulationList delete
   */
  export type ConsulationListDeleteArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
    /**
     * Filter which ConsulationList to delete.
     */
    where: ConsulationListWhereUniqueInput
  }


  /**
   * ConsulationList deleteMany
   */
  export type ConsulationListDeleteManyArgs = {
    /**
     * Filter which ConsulationLists to delete
     */
    where?: ConsulationListWhereInput
  }


  /**
   * ConsulationList findRaw
   */
  export type ConsulationListFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ConsulationList aggregateRaw
   */
  export type ConsulationListAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ConsulationList without action
   */
  export type ConsulationListArgs = {
    /**
     * Select specific fields to fetch from the ConsulationList
     */
    select?: ConsulationListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsulationListInclude | null
  }



  /**
   * Model ResearchDocument
   */


  export type AggregateResearchDocument = {
    _count: ResearchDocumentCountAggregateOutputType | null
    _min: ResearchDocumentMinAggregateOutputType | null
    _max: ResearchDocumentMaxAggregateOutputType | null
  }

  export type ResearchDocumentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    patientId: string | null
  }

  export type ResearchDocumentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    patientId: string | null
  }

  export type ResearchDocumentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    authorId: number
    patientId: number
    _all: number
  }


  export type ResearchDocumentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    patientId?: true
  }

  export type ResearchDocumentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    patientId?: true
  }

  export type ResearchDocumentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    authorId?: true
    patientId?: true
    _all?: true
  }

  export type ResearchDocumentAggregateArgs = {
    /**
     * Filter which ResearchDocument to aggregate.
     */
    where?: ResearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchDocuments to fetch.
     */
    orderBy?: Enumerable<ResearchDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchDocuments
    **/
    _count?: true | ResearchDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchDocumentMaxAggregateInputType
  }

  export type GetResearchDocumentAggregateType<T extends ResearchDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchDocument[P]>
      : GetScalarType<T[P], AggregateResearchDocument[P]>
  }




  export type ResearchDocumentGroupByArgs = {
    where?: ResearchDocumentWhereInput
    orderBy?: Enumerable<ResearchDocumentOrderByWithAggregationInput>
    by: ResearchDocumentScalarFieldEnum[]
    having?: ResearchDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchDocumentCountAggregateInputType | true
    _min?: ResearchDocumentMinAggregateInputType
    _max?: ResearchDocumentMaxAggregateInputType
  }


  export type ResearchDocumentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    content: JsonValue | null
    authorId: string
    patientId: string
    _count: ResearchDocumentCountAggregateOutputType | null
    _min: ResearchDocumentMinAggregateOutputType | null
    _max: ResearchDocumentMaxAggregateOutputType | null
  }

  type GetResearchDocumentGroupByPayload<T extends ResearchDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ResearchDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ResearchDocumentSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    author?: boolean | PulseUserArgs
    authorId?: boolean
    patient?: boolean | PulseUserArgs
    patientId?: boolean
  }


  export type ResearchDocumentInclude = {
    author?: boolean | PulseUserArgs
    patient?: boolean | PulseUserArgs
  }

  export type ResearchDocumentGetPayload<S extends boolean | null | undefined | ResearchDocumentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ResearchDocument :
    S extends undefined ? never :
    S extends { include: any } & (ResearchDocumentArgs | ResearchDocumentFindManyArgs)
    ? ResearchDocument  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? PulseUserGetPayload<S['include'][P]> :
        P extends 'patient' ? PulseUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ResearchDocumentArgs | ResearchDocumentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? PulseUserGetPayload<S['select'][P]> :
        P extends 'patient' ? PulseUserGetPayload<S['select'][P]> :  P extends keyof ResearchDocument ? ResearchDocument[P] : never
  } 
      : ResearchDocument


  type ResearchDocumentCountArgs = 
    Omit<ResearchDocumentFindManyArgs, 'select' | 'include'> & {
      select?: ResearchDocumentCountAggregateInputType | true
    }

  export interface ResearchDocumentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ResearchDocument that matches the filter.
     * @param {ResearchDocumentFindUniqueArgs} args - Arguments to find a ResearchDocument
     * @example
     * // Get one ResearchDocument
     * const researchDocument = await prisma.researchDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResearchDocumentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResearchDocumentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ResearchDocument'> extends True ? Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>> : Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T> | null, null>

    /**
     * Find one ResearchDocument that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResearchDocumentFindUniqueOrThrowArgs} args - Arguments to find a ResearchDocument
     * @example
     * // Get one ResearchDocument
     * const researchDocument = await prisma.researchDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResearchDocumentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ResearchDocumentFindUniqueOrThrowArgs>
    ): Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>>

    /**
     * Find the first ResearchDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchDocumentFindFirstArgs} args - Arguments to find a ResearchDocument
     * @example
     * // Get one ResearchDocument
     * const researchDocument = await prisma.researchDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResearchDocumentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResearchDocumentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ResearchDocument'> extends True ? Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>> : Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T> | null, null>

    /**
     * Find the first ResearchDocument that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchDocumentFindFirstOrThrowArgs} args - Arguments to find a ResearchDocument
     * @example
     * // Get one ResearchDocument
     * const researchDocument = await prisma.researchDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResearchDocumentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ResearchDocumentFindFirstOrThrowArgs>
    ): Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>>

    /**
     * Find zero or more ResearchDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchDocumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchDocuments
     * const researchDocuments = await prisma.researchDocument.findMany()
     * 
     * // Get first 10 ResearchDocuments
     * const researchDocuments = await prisma.researchDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchDocumentWithIdOnly = await prisma.researchDocument.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResearchDocumentFindManyArgs>(
      args?: SelectSubset<T, ResearchDocumentFindManyArgs>
    ): Prisma.PrismaPromise<Array<ResearchDocumentGetPayload<T>>>

    /**
     * Create a ResearchDocument.
     * @param {ResearchDocumentCreateArgs} args - Arguments to create a ResearchDocument.
     * @example
     * // Create one ResearchDocument
     * const ResearchDocument = await prisma.researchDocument.create({
     *   data: {
     *     // ... data to create a ResearchDocument
     *   }
     * })
     * 
    **/
    create<T extends ResearchDocumentCreateArgs>(
      args: SelectSubset<T, ResearchDocumentCreateArgs>
    ): Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>>

    /**
     * Create many ResearchDocuments.
     *     @param {ResearchDocumentCreateManyArgs} args - Arguments to create many ResearchDocuments.
     *     @example
     *     // Create many ResearchDocuments
     *     const researchDocument = await prisma.researchDocument.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResearchDocumentCreateManyArgs>(
      args?: SelectSubset<T, ResearchDocumentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResearchDocument.
     * @param {ResearchDocumentDeleteArgs} args - Arguments to delete one ResearchDocument.
     * @example
     * // Delete one ResearchDocument
     * const ResearchDocument = await prisma.researchDocument.delete({
     *   where: {
     *     // ... filter to delete one ResearchDocument
     *   }
     * })
     * 
    **/
    delete<T extends ResearchDocumentDeleteArgs>(
      args: SelectSubset<T, ResearchDocumentDeleteArgs>
    ): Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>>

    /**
     * Update one ResearchDocument.
     * @param {ResearchDocumentUpdateArgs} args - Arguments to update one ResearchDocument.
     * @example
     * // Update one ResearchDocument
     * const researchDocument = await prisma.researchDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResearchDocumentUpdateArgs>(
      args: SelectSubset<T, ResearchDocumentUpdateArgs>
    ): Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>>

    /**
     * Delete zero or more ResearchDocuments.
     * @param {ResearchDocumentDeleteManyArgs} args - Arguments to filter ResearchDocuments to delete.
     * @example
     * // Delete a few ResearchDocuments
     * const { count } = await prisma.researchDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResearchDocumentDeleteManyArgs>(
      args?: SelectSubset<T, ResearchDocumentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchDocuments
     * const researchDocument = await prisma.researchDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResearchDocumentUpdateManyArgs>(
      args: SelectSubset<T, ResearchDocumentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResearchDocument.
     * @param {ResearchDocumentUpsertArgs} args - Arguments to update or create a ResearchDocument.
     * @example
     * // Update or create a ResearchDocument
     * const researchDocument = await prisma.researchDocument.upsert({
     *   create: {
     *     // ... data to create a ResearchDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchDocument we want to update
     *   }
     * })
    **/
    upsert<T extends ResearchDocumentUpsertArgs>(
      args: SelectSubset<T, ResearchDocumentUpsertArgs>
    ): Prisma__ResearchDocumentClient<ResearchDocumentGetPayload<T>>

    /**
     * Find zero or more ResearchDocuments that matches the filter.
     * @param {ResearchDocumentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const researchDocument = await prisma.researchDocument.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ResearchDocumentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ResearchDocument.
     * @param {ResearchDocumentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const researchDocument = await prisma.researchDocument.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ResearchDocumentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ResearchDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchDocumentCountArgs} args - Arguments to filter ResearchDocuments to count.
     * @example
     * // Count the number of ResearchDocuments
     * const count = await prisma.researchDocument.count({
     *   where: {
     *     // ... the filter for the ResearchDocuments we want to count
     *   }
     * })
    **/
    count<T extends ResearchDocumentCountArgs>(
      args?: Subset<T, ResearchDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchDocumentAggregateArgs>(args: Subset<T, ResearchDocumentAggregateArgs>): Prisma.PrismaPromise<GetResearchDocumentAggregateType<T>>

    /**
     * Group by ResearchDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchDocumentGroupByArgs} args - Group by arguments.
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
      T extends ResearchDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ResearchDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResearchDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResearchDocumentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends PulseUserArgs= {}>(args?: Subset<T, PulseUserArgs>): Prisma__PulseUserClient<PulseUserGetPayload<T> | Null>;

    patient<T extends PulseUserArgs= {}>(args?: Subset<T, PulseUserArgs>): Prisma__PulseUserClient<PulseUserGetPayload<T> | Null>;

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
   * ResearchDocument base type for findUnique actions
   */
  export type ResearchDocumentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * Filter, which ResearchDocument to fetch.
     */
    where: ResearchDocumentWhereUniqueInput
  }

  /**
   * ResearchDocument findUnique
   */
  export interface ResearchDocumentFindUniqueArgs extends ResearchDocumentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ResearchDocument findUniqueOrThrow
   */
  export type ResearchDocumentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * Filter, which ResearchDocument to fetch.
     */
    where: ResearchDocumentWhereUniqueInput
  }


  /**
   * ResearchDocument base type for findFirst actions
   */
  export type ResearchDocumentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * Filter, which ResearchDocument to fetch.
     */
    where?: ResearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchDocuments to fetch.
     */
    orderBy?: Enumerable<ResearchDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchDocuments.
     */
    cursor?: ResearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchDocuments.
     */
    distinct?: Enumerable<ResearchDocumentScalarFieldEnum>
  }

  /**
   * ResearchDocument findFirst
   */
  export interface ResearchDocumentFindFirstArgs extends ResearchDocumentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ResearchDocument findFirstOrThrow
   */
  export type ResearchDocumentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * Filter, which ResearchDocument to fetch.
     */
    where?: ResearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchDocuments to fetch.
     */
    orderBy?: Enumerable<ResearchDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchDocuments.
     */
    cursor?: ResearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchDocuments.
     */
    distinct?: Enumerable<ResearchDocumentScalarFieldEnum>
  }


  /**
   * ResearchDocument findMany
   */
  export type ResearchDocumentFindManyArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * Filter, which ResearchDocuments to fetch.
     */
    where?: ResearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchDocuments to fetch.
     */
    orderBy?: Enumerable<ResearchDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchDocuments.
     */
    cursor?: ResearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchDocuments.
     */
    skip?: number
    distinct?: Enumerable<ResearchDocumentScalarFieldEnum>
  }


  /**
   * ResearchDocument create
   */
  export type ResearchDocumentCreateArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * The data needed to create a ResearchDocument.
     */
    data: XOR<ResearchDocumentCreateInput, ResearchDocumentUncheckedCreateInput>
  }


  /**
   * ResearchDocument createMany
   */
  export type ResearchDocumentCreateManyArgs = {
    /**
     * The data used to create many ResearchDocuments.
     */
    data: Enumerable<ResearchDocumentCreateManyInput>
  }


  /**
   * ResearchDocument update
   */
  export type ResearchDocumentUpdateArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * The data needed to update a ResearchDocument.
     */
    data: XOR<ResearchDocumentUpdateInput, ResearchDocumentUncheckedUpdateInput>
    /**
     * Choose, which ResearchDocument to update.
     */
    where: ResearchDocumentWhereUniqueInput
  }


  /**
   * ResearchDocument updateMany
   */
  export type ResearchDocumentUpdateManyArgs = {
    /**
     * The data used to update ResearchDocuments.
     */
    data: XOR<ResearchDocumentUpdateManyMutationInput, ResearchDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ResearchDocuments to update
     */
    where?: ResearchDocumentWhereInput
  }


  /**
   * ResearchDocument upsert
   */
  export type ResearchDocumentUpsertArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * The filter to search for the ResearchDocument to update in case it exists.
     */
    where: ResearchDocumentWhereUniqueInput
    /**
     * In case the ResearchDocument found by the `where` argument doesn't exist, create a new ResearchDocument with this data.
     */
    create: XOR<ResearchDocumentCreateInput, ResearchDocumentUncheckedCreateInput>
    /**
     * In case the ResearchDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearchDocumentUpdateInput, ResearchDocumentUncheckedUpdateInput>
  }


  /**
   * ResearchDocument delete
   */
  export type ResearchDocumentDeleteArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
    /**
     * Filter which ResearchDocument to delete.
     */
    where: ResearchDocumentWhereUniqueInput
  }


  /**
   * ResearchDocument deleteMany
   */
  export type ResearchDocumentDeleteManyArgs = {
    /**
     * Filter which ResearchDocuments to delete
     */
    where?: ResearchDocumentWhereInput
  }


  /**
   * ResearchDocument findRaw
   */
  export type ResearchDocumentFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ResearchDocument aggregateRaw
   */
  export type ResearchDocumentAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ResearchDocument without action
   */
  export type ResearchDocumentArgs = {
    /**
     * Select specific fields to fetch from the ResearchDocument
     */
    select?: ResearchDocumentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResearchDocumentInclude | null
  }



  /**
   * Model Clinic
   */


  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  export type ClinicMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    address: string | null
    coverPhoto: string | null
    phoneNumber: string | null
    description: string | null
  }

  export type ClinicMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    address: string | null
    coverPhoto: string | null
    phoneNumber: string | null
    description: string | null
  }

  export type ClinicCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    address: number
    coverPhoto: number
    phoneNumber: number
    description: number
    doctorIds: number
    _all: number
  }


  export type ClinicMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    address?: true
    coverPhoto?: true
    phoneNumber?: true
    description?: true
  }

  export type ClinicMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    address?: true
    coverPhoto?: true
    phoneNumber?: true
    description?: true
  }

  export type ClinicCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    address?: true
    coverPhoto?: true
    phoneNumber?: true
    description?: true
    doctorIds?: true
    _all?: true
  }

  export type ClinicAggregateArgs = {
    /**
     * Filter which Clinic to aggregate.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: Enumerable<ClinicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinics
    **/
    _count?: true | ClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicMaxAggregateInputType
  }

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>
  }




  export type ClinicGroupByArgs = {
    where?: ClinicWhereInput
    orderBy?: Enumerable<ClinicOrderByWithAggregationInput>
    by: ClinicScalarFieldEnum[]
    having?: ClinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicCountAggregateInputType | true
    _min?: ClinicMinAggregateInputType
    _max?: ClinicMaxAggregateInputType
  }


  export type ClinicGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    email: string
    address: string
    coverPhoto: string
    phoneNumber: string
    description: string
    doctorIds: string[]
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  type GetClinicGroupByPayload<T extends ClinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
        }
      >
    >


  export type ClinicSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    coverPhoto?: boolean
    phoneNumber?: boolean
    description?: boolean
    doctorIds?: boolean
    doctors?: boolean | Clinic$doctorsArgs
    _count?: boolean | ClinicCountOutputTypeArgs
  }


  export type ClinicInclude = {
    doctors?: boolean | Clinic$doctorsArgs
    _count?: boolean | ClinicCountOutputTypeArgs
  }

  export type ClinicGetPayload<S extends boolean | null | undefined | ClinicArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Clinic :
    S extends undefined ? never :
    S extends { include: any } & (ClinicArgs | ClinicFindManyArgs)
    ? Clinic  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'doctors' ? Array < DoctorGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClinicCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClinicArgs | ClinicFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'doctors' ? Array < DoctorGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClinicCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Clinic ? Clinic[P] : never
  } 
      : Clinic


  type ClinicCountArgs = 
    Omit<ClinicFindManyArgs, 'select' | 'include'> & {
      select?: ClinicCountAggregateInputType | true
    }

  export interface ClinicDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Clinic that matches the filter.
     * @param {ClinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClinicFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClinicFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Clinic'> extends True ? Prisma__ClinicClient<ClinicGetPayload<T>> : Prisma__ClinicClient<ClinicGetPayload<T> | null, null>

    /**
     * Find one Clinic that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClinicFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClinicFindUniqueOrThrowArgs>
    ): Prisma__ClinicClient<ClinicGetPayload<T>>

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClinicFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClinicFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Clinic'> extends True ? Prisma__ClinicClient<ClinicGetPayload<T>> : Prisma__ClinicClient<ClinicGetPayload<T> | null, null>

    /**
     * Find the first Clinic that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClinicFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClinicFindFirstOrThrowArgs>
    ): Prisma__ClinicClient<ClinicGetPayload<T>>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClinicFindManyArgs>(
      args?: SelectSubset<T, ClinicFindManyArgs>
    ): Prisma.PrismaPromise<Array<ClinicGetPayload<T>>>

    /**
     * Create a Clinic.
     * @param {ClinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     * 
    **/
    create<T extends ClinicCreateArgs>(
      args: SelectSubset<T, ClinicCreateArgs>
    ): Prisma__ClinicClient<ClinicGetPayload<T>>

    /**
     * Create many Clinics.
     *     @param {ClinicCreateManyArgs} args - Arguments to create many Clinics.
     *     @example
     *     // Create many Clinics
     *     const clinic = await prisma.clinic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClinicCreateManyArgs>(
      args?: SelectSubset<T, ClinicCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clinic.
     * @param {ClinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     * 
    **/
    delete<T extends ClinicDeleteArgs>(
      args: SelectSubset<T, ClinicDeleteArgs>
    ): Prisma__ClinicClient<ClinicGetPayload<T>>

    /**
     * Update one Clinic.
     * @param {ClinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClinicUpdateArgs>(
      args: SelectSubset<T, ClinicUpdateArgs>
    ): Prisma__ClinicClient<ClinicGetPayload<T>>

    /**
     * Delete zero or more Clinics.
     * @param {ClinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClinicDeleteManyArgs>(
      args?: SelectSubset<T, ClinicDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClinicUpdateManyArgs>(
      args: SelectSubset<T, ClinicUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clinic.
     * @param {ClinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
    **/
    upsert<T extends ClinicUpsertArgs>(
      args: SelectSubset<T, ClinicUpsertArgs>
    ): Prisma__ClinicClient<ClinicGetPayload<T>>

    /**
     * Find zero or more Clinics that matches the filter.
     * @param {ClinicFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const clinic = await prisma.clinic.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ClinicFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Clinic.
     * @param {ClinicAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const clinic = await prisma.clinic.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ClinicAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends ClinicCountArgs>(
      args?: Subset<T, ClinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicAggregateArgs>(args: Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicGroupByArgs} args - Group by arguments.
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
      T extends ClinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicGroupByArgs['orderBy'] }
        : { orderBy?: ClinicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClinicClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    doctors<T extends Clinic$doctorsArgs= {}>(args?: Subset<T, Clinic$doctorsArgs>): Prisma.PrismaPromise<Array<DoctorGetPayload<T>>| Null>;

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
   * Clinic base type for findUnique actions
   */
  export type ClinicFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findUnique
   */
  export interface ClinicFindUniqueArgs extends ClinicFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Clinic findUniqueOrThrow
   */
  export type ClinicFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }


  /**
   * Clinic base type for findFirst actions
   */
  export type ClinicFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: Enumerable<ClinicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: Enumerable<ClinicScalarFieldEnum>
  }

  /**
   * Clinic findFirst
   */
  export interface ClinicFindFirstArgs extends ClinicFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Clinic findFirstOrThrow
   */
  export type ClinicFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: Enumerable<ClinicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: Enumerable<ClinicScalarFieldEnum>
  }


  /**
   * Clinic findMany
   */
  export type ClinicFindManyArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: Enumerable<ClinicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    distinct?: Enumerable<ClinicScalarFieldEnum>
  }


  /**
   * Clinic create
   */
  export type ClinicCreateArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * The data needed to create a Clinic.
     */
    data: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
  }


  /**
   * Clinic createMany
   */
  export type ClinicCreateManyArgs = {
    /**
     * The data used to create many Clinics.
     */
    data: Enumerable<ClinicCreateManyInput>
  }


  /**
   * Clinic update
   */
  export type ClinicUpdateArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * The data needed to update a Clinic.
     */
    data: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
    /**
     * Choose, which Clinic to update.
     */
    where: ClinicWhereUniqueInput
  }


  /**
   * Clinic updateMany
   */
  export type ClinicUpdateManyArgs = {
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
  }


  /**
   * Clinic upsert
   */
  export type ClinicUpsertArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * The filter to search for the Clinic to update in case it exists.
     */
    where: ClinicWhereUniqueInput
    /**
     * In case the Clinic found by the `where` argument doesn't exist, create a new Clinic with this data.
     */
    create: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
    /**
     * In case the Clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
  }


  /**
   * Clinic delete
   */
  export type ClinicDeleteArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
    /**
     * Filter which Clinic to delete.
     */
    where: ClinicWhereUniqueInput
  }


  /**
   * Clinic deleteMany
   */
  export type ClinicDeleteManyArgs = {
    /**
     * Filter which Clinics to delete
     */
    where?: ClinicWhereInput
  }


  /**
   * Clinic findRaw
   */
  export type ClinicFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Clinic aggregateRaw
   */
  export type ClinicAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Clinic.doctors
   */
  export type Clinic$doctorsArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    where?: DoctorWhereInput
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Clinic without action
   */
  export type ClinicArgs = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClinicInclude | null
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
    clinicId: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    calLink: string | null
    calUserId: number | null
    userId: string | null
    clinicId: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    calLink: number
    calUserId: number
    userId: number
    specializationsIds: number
    clinicId: number
    description: number
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
    clinicId?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    calLink?: true
    calUserId?: true
    userId?: true
    clinicId?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    calLink?: true
    calUserId?: true
    userId?: true
    specializationsIds?: true
    clinicId?: true
    description?: true
    _all?: true
  }

  export type DoctorAggregateArgs = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
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
    by: DoctorScalarFieldEnum[]
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
    clinicId: string | null
    description: JsonValue | null
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
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
    user?: boolean | PulseUserArgs
    userId?: boolean
    specializationsIds?: boolean
    specializations?: boolean | Doctor$specializationsArgs
    clinicId?: boolean
    clinic?: boolean | ClinicArgs
    description?: boolean
    _count?: boolean | DoctorCountOutputTypeArgs
  }


  export type DoctorInclude = {
    user?: boolean | PulseUserArgs
    specializations?: boolean | Doctor$specializationsArgs
    clinic?: boolean | ClinicArgs
    _count?: boolean | DoctorCountOutputTypeArgs
  }

  export type DoctorGetPayload<S extends boolean | null | undefined | DoctorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Doctor :
    S extends undefined ? never :
    S extends { include: any } & (DoctorArgs | DoctorFindManyArgs)
    ? Doctor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? PulseUserGetPayload<S['include'][P]> :
        P extends 'specializations' ? Array < SpecializationGetPayload<S['include'][P]>>  :
        P extends 'clinic' ? ClinicGetPayload<S['include'][P]> | null :
        P extends '_count' ? DoctorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DoctorArgs | DoctorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? PulseUserGetPayload<S['select'][P]> :
        P extends 'specializations' ? Array < SpecializationGetPayload<S['select'][P]>>  :
        P extends 'clinic' ? ClinicGetPayload<S['select'][P]> | null :
        P extends '_count' ? DoctorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Doctor ? Doctor[P] : never
  } 
      : Doctor


  type DoctorCountArgs = 
    Omit<DoctorFindManyArgs, 'select' | 'include'> & {
      select?: DoctorCountAggregateInputType | true
    }

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
    ): Prisma.PrismaPromise<Array<DoctorGetPayload<T>>>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<JsonObject>

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
    ): Prisma.PrismaPromise<JsonObject>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DoctorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends PulseUserArgs= {}>(args?: Subset<T, PulseUserArgs>): Prisma__PulseUserClient<PulseUserGetPayload<T> | Null>;

    specializations<T extends Doctor$specializationsArgs= {}>(args?: Subset<T, Doctor$specializationsArgs>): Prisma.PrismaPromise<Array<SpecializationGetPayload<T>>| Null>;

    clinic<T extends ClinicArgs= {}>(args?: Subset<T, ClinicArgs>): Prisma__ClinicClient<ClinicGetPayload<T> | Null>;

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
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
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
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor base type for findFirst actions
   */
  export type DoctorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
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
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor create
   */
  export type DoctorCreateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }


  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs = {
    /**
     * The data used to create many Doctors.
     */
    data: Enumerable<DoctorCreateManyInput>
  }


  /**
   * Doctor update
   */
  export type DoctorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }


  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor findRaw
   */
  export type DoctorFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Doctor aggregateRaw
   */
  export type DoctorAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Doctor.specializations
   */
  export type Doctor$specializationsArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
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
    by: SpecializationScalarFieldEnum[]
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

  type GetSpecializationGroupByPayload<T extends SpecializationGroupByArgs> = Prisma.PrismaPromise<
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


  type SpecializationCountArgs = 
    Omit<SpecializationFindManyArgs, 'select' | 'include'> & {
      select?: SpecializationCountAggregateInputType | true
    }

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
    ): Prisma.PrismaPromise<Array<SpecializationGetPayload<T>>>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<JsonObject>

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
    ): Prisma.PrismaPromise<JsonObject>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends SpecializationAggregateArgs>(args: Subset<T, SpecializationAggregateArgs>): Prisma.PrismaPromise<GetSpecializationAggregateType<T>>

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
    >(args: SubsetIntersection<T, SpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpecializationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Doctor<T extends Specialization$DoctorArgs= {}>(args?: Subset<T, Specialization$DoctorArgs>): Prisma.PrismaPromise<Array<DoctorGetPayload<T>>| Null>;

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
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     */
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
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     */
    where: SpecializationWhereUniqueInput
  }


  /**
   * Specialization base type for findFirst actions
   */
  export type SpecializationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     */
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
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * Filter, which Specialization to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     */
    distinct?: Enumerable<SpecializationScalarFieldEnum>
  }


  /**
   * Specialization findMany
   */
  export type SpecializationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * Filter, which Specializations to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: Enumerable<SpecializationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    distinct?: Enumerable<SpecializationScalarFieldEnum>
  }


  /**
   * Specialization create
   */
  export type SpecializationCreateArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * The data needed to create a Specialization.
     */
    data: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
  }


  /**
   * Specialization createMany
   */
  export type SpecializationCreateManyArgs = {
    /**
     * The data used to create many Specializations.
     */
    data: Enumerable<SpecializationCreateManyInput>
  }


  /**
   * Specialization update
   */
  export type SpecializationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * The data needed to update a Specialization.
     */
    data: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
    /**
     * Choose, which Specialization to update.
     */
    where: SpecializationWhereUniqueInput
  }


  /**
   * Specialization updateMany
   */
  export type SpecializationUpdateManyArgs = {
    /**
     * The data used to update Specializations.
     */
    data: XOR<SpecializationUpdateManyMutationInput, SpecializationUncheckedUpdateManyInput>
    /**
     * Filter which Specializations to update
     */
    where?: SpecializationWhereInput
  }


  /**
   * Specialization upsert
   */
  export type SpecializationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * The filter to search for the Specialization to update in case it exists.
     */
    where: SpecializationWhereUniqueInput
    /**
     * In case the Specialization found by the `where` argument doesn't exist, create a new Specialization with this data.
     */
    create: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
    /**
     * In case the Specialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
  }


  /**
   * Specialization delete
   */
  export type SpecializationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
    /**
     * Filter which Specialization to delete.
     */
    where: SpecializationWhereUniqueInput
  }


  /**
   * Specialization deleteMany
   */
  export type SpecializationDeleteManyArgs = {
    /**
     * Filter which Specializations to delete
     */
    where?: SpecializationWhereInput
  }


  /**
   * Specialization findRaw
   */
  export type SpecializationFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Specialization aggregateRaw
   */
  export type SpecializationAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Specialization.Doctor
   */
  export type Specialization$DoctorArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    select?: SpecializationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecializationInclude | null
  }



  /**
   * Model FileEntity
   */


  export type AggregateFileEntity = {
    _count: FileEntityCountAggregateOutputType | null
    _min: FileEntityMinAggregateOutputType | null
    _max: FileEntityMaxAggregateOutputType | null
  }

  export type FileEntityMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileUrl: string | null
    key: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileEntityMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileUrl: string | null
    key: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileEntityCountAggregateOutputType = {
    id: number
    fileName: number
    fileUrl: number
    key: number
    authorId: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileEntityMinAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    key?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileEntityMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    key?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileEntityCountAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    key?: true
    authorId?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileEntityAggregateArgs = {
    /**
     * Filter which FileEntity to aggregate.
     */
    where?: FileEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntities to fetch.
     */
    orderBy?: Enumerable<FileEntityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileEntities
    **/
    _count?: true | FileEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileEntityMaxAggregateInputType
  }

  export type GetFileEntityAggregateType<T extends FileEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateFileEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileEntity[P]>
      : GetScalarType<T[P], AggregateFileEntity[P]>
  }




  export type FileEntityGroupByArgs = {
    where?: FileEntityWhereInput
    orderBy?: Enumerable<FileEntityOrderByWithAggregationInput>
    by: FileEntityScalarFieldEnum[]
    having?: FileEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileEntityCountAggregateInputType | true
    _min?: FileEntityMinAggregateInputType
    _max?: FileEntityMaxAggregateInputType
  }


  export type FileEntityGroupByOutputType = {
    id: string
    fileName: string
    fileUrl: string
    key: string
    authorId: string | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: FileEntityCountAggregateOutputType | null
    _min: FileEntityMinAggregateOutputType | null
    _max: FileEntityMaxAggregateOutputType | null
  }

  type GetFileEntityGroupByPayload<T extends FileEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FileEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileEntityGroupByOutputType[P]>
            : GetScalarType<T[P], FileEntityGroupByOutputType[P]>
        }
      >
    >


  export type FileEntitySelect = {
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    key?: boolean
    authorId?: boolean
    author?: boolean | PulseUserArgs
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type FileEntityInclude = {
    author?: boolean | PulseUserArgs
  }

  export type FileEntityGetPayload<S extends boolean | null | undefined | FileEntityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FileEntity :
    S extends undefined ? never :
    S extends { include: any } & (FileEntityArgs | FileEntityFindManyArgs)
    ? FileEntity  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? PulseUserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (FileEntityArgs | FileEntityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? PulseUserGetPayload<S['select'][P]> | null :  P extends keyof FileEntity ? FileEntity[P] : never
  } 
      : FileEntity


  type FileEntityCountArgs = 
    Omit<FileEntityFindManyArgs, 'select' | 'include'> & {
      select?: FileEntityCountAggregateInputType | true
    }

  export interface FileEntityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FileEntity that matches the filter.
     * @param {FileEntityFindUniqueArgs} args - Arguments to find a FileEntity
     * @example
     * // Get one FileEntity
     * const fileEntity = await prisma.fileEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileEntityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FileEntityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FileEntity'> extends True ? Prisma__FileEntityClient<FileEntityGetPayload<T>> : Prisma__FileEntityClient<FileEntityGetPayload<T> | null, null>

    /**
     * Find one FileEntity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileEntityFindUniqueOrThrowArgs} args - Arguments to find a FileEntity
     * @example
     * // Get one FileEntity
     * const fileEntity = await prisma.fileEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileEntityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FileEntityFindUniqueOrThrowArgs>
    ): Prisma__FileEntityClient<FileEntityGetPayload<T>>

    /**
     * Find the first FileEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntityFindFirstArgs} args - Arguments to find a FileEntity
     * @example
     * // Get one FileEntity
     * const fileEntity = await prisma.fileEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileEntityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FileEntityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FileEntity'> extends True ? Prisma__FileEntityClient<FileEntityGetPayload<T>> : Prisma__FileEntityClient<FileEntityGetPayload<T> | null, null>

    /**
     * Find the first FileEntity that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntityFindFirstOrThrowArgs} args - Arguments to find a FileEntity
     * @example
     * // Get one FileEntity
     * const fileEntity = await prisma.fileEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileEntityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FileEntityFindFirstOrThrowArgs>
    ): Prisma__FileEntityClient<FileEntityGetPayload<T>>

    /**
     * Find zero or more FileEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileEntities
     * const fileEntities = await prisma.fileEntity.findMany()
     * 
     * // Get first 10 FileEntities
     * const fileEntities = await prisma.fileEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileEntityWithIdOnly = await prisma.fileEntity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileEntityFindManyArgs>(
      args?: SelectSubset<T, FileEntityFindManyArgs>
    ): Prisma.PrismaPromise<Array<FileEntityGetPayload<T>>>

    /**
     * Create a FileEntity.
     * @param {FileEntityCreateArgs} args - Arguments to create a FileEntity.
     * @example
     * // Create one FileEntity
     * const FileEntity = await prisma.fileEntity.create({
     *   data: {
     *     // ... data to create a FileEntity
     *   }
     * })
     * 
    **/
    create<T extends FileEntityCreateArgs>(
      args: SelectSubset<T, FileEntityCreateArgs>
    ): Prisma__FileEntityClient<FileEntityGetPayload<T>>

    /**
     * Create many FileEntities.
     *     @param {FileEntityCreateManyArgs} args - Arguments to create many FileEntities.
     *     @example
     *     // Create many FileEntities
     *     const fileEntity = await prisma.fileEntity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileEntityCreateManyArgs>(
      args?: SelectSubset<T, FileEntityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FileEntity.
     * @param {FileEntityDeleteArgs} args - Arguments to delete one FileEntity.
     * @example
     * // Delete one FileEntity
     * const FileEntity = await prisma.fileEntity.delete({
     *   where: {
     *     // ... filter to delete one FileEntity
     *   }
     * })
     * 
    **/
    delete<T extends FileEntityDeleteArgs>(
      args: SelectSubset<T, FileEntityDeleteArgs>
    ): Prisma__FileEntityClient<FileEntityGetPayload<T>>

    /**
     * Update one FileEntity.
     * @param {FileEntityUpdateArgs} args - Arguments to update one FileEntity.
     * @example
     * // Update one FileEntity
     * const fileEntity = await prisma.fileEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileEntityUpdateArgs>(
      args: SelectSubset<T, FileEntityUpdateArgs>
    ): Prisma__FileEntityClient<FileEntityGetPayload<T>>

    /**
     * Delete zero or more FileEntities.
     * @param {FileEntityDeleteManyArgs} args - Arguments to filter FileEntities to delete.
     * @example
     * // Delete a few FileEntities
     * const { count } = await prisma.fileEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileEntityDeleteManyArgs>(
      args?: SelectSubset<T, FileEntityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileEntities
     * const fileEntity = await prisma.fileEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileEntityUpdateManyArgs>(
      args: SelectSubset<T, FileEntityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileEntity.
     * @param {FileEntityUpsertArgs} args - Arguments to update or create a FileEntity.
     * @example
     * // Update or create a FileEntity
     * const fileEntity = await prisma.fileEntity.upsert({
     *   create: {
     *     // ... data to create a FileEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileEntity we want to update
     *   }
     * })
    **/
    upsert<T extends FileEntityUpsertArgs>(
      args: SelectSubset<T, FileEntityUpsertArgs>
    ): Prisma__FileEntityClient<FileEntityGetPayload<T>>

    /**
     * Find zero or more FileEntities that matches the filter.
     * @param {FileEntityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fileEntity = await prisma.fileEntity.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FileEntityFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FileEntity.
     * @param {FileEntityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fileEntity = await prisma.fileEntity.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FileEntityAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of FileEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntityCountArgs} args - Arguments to filter FileEntities to count.
     * @example
     * // Count the number of FileEntities
     * const count = await prisma.fileEntity.count({
     *   where: {
     *     // ... the filter for the FileEntities we want to count
     *   }
     * })
    **/
    count<T extends FileEntityCountArgs>(
      args?: Subset<T, FileEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileEntityAggregateArgs>(args: Subset<T, FileEntityAggregateArgs>): Prisma.PrismaPromise<GetFileEntityAggregateType<T>>

    /**
     * Group by FileEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntityGroupByArgs} args - Group by arguments.
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
      T extends FileEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileEntityGroupByArgs['orderBy'] }
        : { orderBy?: FileEntityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FileEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FileEntityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends PulseUserArgs= {}>(args?: Subset<T, PulseUserArgs>): Prisma__PulseUserClient<PulseUserGetPayload<T> | Null>;

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
   * FileEntity base type for findUnique actions
   */
  export type FileEntityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * Filter, which FileEntity to fetch.
     */
    where: FileEntityWhereUniqueInput
  }

  /**
   * FileEntity findUnique
   */
  export interface FileEntityFindUniqueArgs extends FileEntityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FileEntity findUniqueOrThrow
   */
  export type FileEntityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * Filter, which FileEntity to fetch.
     */
    where: FileEntityWhereUniqueInput
  }


  /**
   * FileEntity base type for findFirst actions
   */
  export type FileEntityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * Filter, which FileEntity to fetch.
     */
    where?: FileEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntities to fetch.
     */
    orderBy?: Enumerable<FileEntityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileEntities.
     */
    cursor?: FileEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileEntities.
     */
    distinct?: Enumerable<FileEntityScalarFieldEnum>
  }

  /**
   * FileEntity findFirst
   */
  export interface FileEntityFindFirstArgs extends FileEntityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FileEntity findFirstOrThrow
   */
  export type FileEntityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * Filter, which FileEntity to fetch.
     */
    where?: FileEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntities to fetch.
     */
    orderBy?: Enumerable<FileEntityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileEntities.
     */
    cursor?: FileEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileEntities.
     */
    distinct?: Enumerable<FileEntityScalarFieldEnum>
  }


  /**
   * FileEntity findMany
   */
  export type FileEntityFindManyArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * Filter, which FileEntities to fetch.
     */
    where?: FileEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntities to fetch.
     */
    orderBy?: Enumerable<FileEntityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileEntities.
     */
    cursor?: FileEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntities.
     */
    skip?: number
    distinct?: Enumerable<FileEntityScalarFieldEnum>
  }


  /**
   * FileEntity create
   */
  export type FileEntityCreateArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * The data needed to create a FileEntity.
     */
    data: XOR<FileEntityCreateInput, FileEntityUncheckedCreateInput>
  }


  /**
   * FileEntity createMany
   */
  export type FileEntityCreateManyArgs = {
    /**
     * The data used to create many FileEntities.
     */
    data: Enumerable<FileEntityCreateManyInput>
  }


  /**
   * FileEntity update
   */
  export type FileEntityUpdateArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * The data needed to update a FileEntity.
     */
    data: XOR<FileEntityUpdateInput, FileEntityUncheckedUpdateInput>
    /**
     * Choose, which FileEntity to update.
     */
    where: FileEntityWhereUniqueInput
  }


  /**
   * FileEntity updateMany
   */
  export type FileEntityUpdateManyArgs = {
    /**
     * The data used to update FileEntities.
     */
    data: XOR<FileEntityUpdateManyMutationInput, FileEntityUncheckedUpdateManyInput>
    /**
     * Filter which FileEntities to update
     */
    where?: FileEntityWhereInput
  }


  /**
   * FileEntity upsert
   */
  export type FileEntityUpsertArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * The filter to search for the FileEntity to update in case it exists.
     */
    where: FileEntityWhereUniqueInput
    /**
     * In case the FileEntity found by the `where` argument doesn't exist, create a new FileEntity with this data.
     */
    create: XOR<FileEntityCreateInput, FileEntityUncheckedCreateInput>
    /**
     * In case the FileEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileEntityUpdateInput, FileEntityUncheckedUpdateInput>
  }


  /**
   * FileEntity delete
   */
  export type FileEntityDeleteArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
    /**
     * Filter which FileEntity to delete.
     */
    where: FileEntityWhereUniqueInput
  }


  /**
   * FileEntity deleteMany
   */
  export type FileEntityDeleteManyArgs = {
    /**
     * Filter which FileEntities to delete
     */
    where?: FileEntityWhereInput
  }


  /**
   * FileEntity findRaw
   */
  export type FileEntityFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FileEntity aggregateRaw
   */
  export type FileEntityAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FileEntity without action
   */
  export type FileEntityArgs = {
    /**
     * Select specific fields to fetch from the FileEntity
     */
    select?: FileEntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileEntityInclude | null
  }



  /**
   * Model Pharmacy
   */


  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyAvgAggregateOutputType = {
    price: number | null
  }

  export type PharmacySumAggregateOutputType = {
    price: number[] | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    company: string | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    company: string | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    name: number
    label: number
    company: number
    price: number
    photoUrls: number
    _all: number
  }


  export type PharmacyAvgAggregateInputType = {
    price?: true
  }

  export type PharmacySumAggregateInputType = {
    price?: true
  }

  export type PharmacyMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    company?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    company?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    company?: true
    price?: true
    photoUrls?: true
    _all?: true
  }

  export type PharmacyAggregateArgs = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs = {
    where?: PharmacyWhereInput
    orderBy?: Enumerable<PharmacyOrderByWithAggregationInput>
    by: PharmacyScalarFieldEnum[]
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _avg?: PharmacyAvgAggregateInputType
    _sum?: PharmacySumAggregateInputType
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }


  export type PharmacyGroupByOutputType = {
    id: string
    name: string
    label: string | null
    company: string | null
    price: number[]
    photoUrls: string[]
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect = {
    id?: boolean
    name?: boolean
    label?: boolean
    company?: boolean
    price?: boolean
    photoUrls?: boolean
  }


  export type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pharmacy :
    S extends undefined ? never :
    S extends { include: any } & (PharmacyArgs | PharmacyFindManyArgs)
    ? Pharmacy 
    : S extends { select: any } & (PharmacyArgs | PharmacyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Pharmacy ? Pharmacy[P] : never
  } 
      : Pharmacy


  type PharmacyCountArgs = 
    Omit<PharmacyFindManyArgs, 'select' | 'include'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PharmacyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PharmacyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pharmacy'> extends True ? Prisma__PharmacyClient<PharmacyGetPayload<T>> : Prisma__PharmacyClient<PharmacyGetPayload<T> | null, null>

    /**
     * Find one Pharmacy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PharmacyFindUniqueOrThrowArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PharmacyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PharmacyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pharmacy'> extends True ? Prisma__PharmacyClient<PharmacyGetPayload<T>> : Prisma__PharmacyClient<PharmacyGetPayload<T> | null, null>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PharmacyFindManyArgs>(
      args?: SelectSubset<T, PharmacyFindManyArgs>
    ): Prisma.PrismaPromise<Array<PharmacyGetPayload<T>>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
    **/
    create<T extends PharmacyCreateArgs>(
      args: SelectSubset<T, PharmacyCreateArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Create many Pharmacies.
     *     @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     *     @example
     *     // Create many Pharmacies
     *     const pharmacy = await prisma.pharmacy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PharmacyCreateManyArgs>(
      args?: SelectSubset<T, PharmacyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
    **/
    delete<T extends PharmacyDeleteArgs>(
      args: SelectSubset<T, PharmacyDeleteArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PharmacyUpdateArgs>(
      args: SelectSubset<T, PharmacyUpdateArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PharmacyDeleteManyArgs>(
      args?: SelectSubset<T, PharmacyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PharmacyUpdateManyArgs>(
      args: SelectSubset<T, PharmacyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
    **/
    upsert<T extends PharmacyUpsertArgs>(
      args: SelectSubset<T, PharmacyUpsertArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * @param {PharmacyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pharmacy = await prisma.pharmacy.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PharmacyFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pharmacy.
     * @param {PharmacyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pharmacy = await prisma.pharmacy.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PharmacyAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
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
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PharmacyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * Pharmacy base type for findUnique actions
   */
  export type PharmacyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUnique
   */
  export interface PharmacyFindUniqueArgs extends PharmacyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }


  /**
   * Pharmacy base type for findFirst actions
   */
  export type PharmacyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: Enumerable<PharmacyScalarFieldEnum>
  }

  /**
   * Pharmacy findFirst
   */
  export interface PharmacyFindFirstArgs extends PharmacyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: Enumerable<PharmacyScalarFieldEnum>
  }


  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: Enumerable<PharmacyScalarFieldEnum>
  }


  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }


  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs = {
    /**
     * The data used to create many Pharmacies.
     */
    data: Enumerable<PharmacyCreateManyInput>
  }


  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }


  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
  }


  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }


  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }


  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
  }


  /**
   * Pharmacy findRaw
   */
  export type PharmacyFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Pharmacy aggregateRaw
   */
  export type PharmacyAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Pharmacy without action
   */
  export type PharmacyArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ClinicScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    address: 'address',
    coverPhoto: 'coverPhoto',
    phoneNumber: 'phoneNumber',
    description: 'description',
    doctorIds: 'doctorIds'
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum]


  export const ConsulationListScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    authorId: 'authorId',
    patientId: 'patientId'
  };

  export type ConsulationListScalarFieldEnum = (typeof ConsulationListScalarFieldEnum)[keyof typeof ConsulationListScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    calLink: 'calLink',
    calUserId: 'calUserId',
    userId: 'userId',
    specializationsIds: 'specializationsIds',
    clinicId: 'clinicId',
    description: 'description'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const FileEntityScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    key: 'key',
    authorId: 'authorId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileEntityScalarFieldEnum = (typeof FileEntityScalarFieldEnum)[keyof typeof FileEntityScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    company: 'company',
    price: 'price',
    photoUrls: 'photoUrls'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const PulseUserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    uniqueName: 'uniqueName',
    phoneNumber: 'phoneNumber',
    address: 'address',
    avatar: 'avatar',
    role: 'role'
  };

  export type PulseUserScalarFieldEnum = (typeof PulseUserScalarFieldEnum)[keyof typeof PulseUserScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ResearchDocumentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    authorId: 'authorId',
    patientId: 'patientId'
  };

  export type ResearchDocumentScalarFieldEnum = (typeof ResearchDocumentScalarFieldEnum)[keyof typeof ResearchDocumentScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type PulseUserWhereInput = {
    AND?: Enumerable<PulseUserWhereInput>
    OR?: Enumerable<PulseUserWhereInput>
    NOT?: Enumerable<PulseUserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    fullName?: StringFilter | string
    uniqueName?: StringFilter | string
    phoneNumber?: StringFilter | string
    address?: StringFilter | string
    avatar?: StringNullableFilter | string | null
    role?: EnumRoleFilter | Role
    appointmentsAsAuthor?: ConsulationListListRelationFilter
    appointmentsAsPatient?: ConsulationListListRelationFilter
    researchDocumentsAsAuthour?: ResearchDocumentListRelationFilter
    researchDocumentsAsPatient?: ResearchDocumentListRelationFilter
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput> | null
    authoredFiles?: FileEntityListRelationFilter
  }

  export type PulseUserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    appointmentsAsAuthor?: ConsulationListOrderByRelationAggregateInput
    appointmentsAsPatient?: ConsulationListOrderByRelationAggregateInput
    researchDocumentsAsAuthour?: ResearchDocumentOrderByRelationAggregateInput
    researchDocumentsAsPatient?: ResearchDocumentOrderByRelationAggregateInput
    doctor?: DoctorOrderByWithRelationInput
    authoredFiles?: FileEntityOrderByRelationAggregateInput
  }

  export type PulseUserWhereUniqueInput = {
    id?: string
    email?: string
    uniqueName?: string
    phoneNumber?: string
  }

  export type PulseUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    _count?: PulseUserCountOrderByAggregateInput
    _max?: PulseUserMaxOrderByAggregateInput
    _min?: PulseUserMinOrderByAggregateInput
  }

  export type PulseUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PulseUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<PulseUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PulseUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    fullName?: StringWithAggregatesFilter | string
    uniqueName?: StringWithAggregatesFilter | string
    phoneNumber?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    avatar?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRoleWithAggregatesFilter | Role
  }

  export type ConsulationListWhereInput = {
    AND?: Enumerable<ConsulationListWhereInput>
    OR?: Enumerable<ConsulationListWhereInput>
    NOT?: Enumerable<ConsulationListWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    content?: JsonNullableFilter
    author?: XOR<PulseUserRelationFilter, PulseUserWhereInput>
    authorId?: StringFilter | string
    patient?: XOR<PulseUserRelationFilter, PulseUserWhereInput>
    patientId?: StringFilter | string
  }

  export type ConsulationListOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    author?: PulseUserOrderByWithRelationInput
    authorId?: SortOrder
    patient?: PulseUserOrderByWithRelationInput
    patientId?: SortOrder
  }

  export type ConsulationListWhereUniqueInput = {
    id?: string
  }

  export type ConsulationListOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
    _count?: ConsulationListCountOrderByAggregateInput
    _max?: ConsulationListMaxOrderByAggregateInput
    _min?: ConsulationListMinOrderByAggregateInput
  }

  export type ConsulationListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ConsulationListScalarWhereWithAggregatesInput>
    OR?: Enumerable<ConsulationListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ConsulationListScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    content?: JsonNullableWithAggregatesFilter
    authorId?: StringWithAggregatesFilter | string
    patientId?: StringWithAggregatesFilter | string
  }

  export type ResearchDocumentWhereInput = {
    AND?: Enumerable<ResearchDocumentWhereInput>
    OR?: Enumerable<ResearchDocumentWhereInput>
    NOT?: Enumerable<ResearchDocumentWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    content?: JsonNullableFilter
    author?: XOR<PulseUserRelationFilter, PulseUserWhereInput>
    authorId?: StringFilter | string
    patient?: XOR<PulseUserRelationFilter, PulseUserWhereInput>
    patientId?: StringFilter | string
  }

  export type ResearchDocumentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    author?: PulseUserOrderByWithRelationInput
    authorId?: SortOrder
    patient?: PulseUserOrderByWithRelationInput
    patientId?: SortOrder
  }

  export type ResearchDocumentWhereUniqueInput = {
    id?: string
  }

  export type ResearchDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
    _count?: ResearchDocumentCountOrderByAggregateInput
    _max?: ResearchDocumentMaxOrderByAggregateInput
    _min?: ResearchDocumentMinOrderByAggregateInput
  }

  export type ResearchDocumentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResearchDocumentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResearchDocumentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResearchDocumentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    content?: JsonNullableWithAggregatesFilter
    authorId?: StringWithAggregatesFilter | string
    patientId?: StringWithAggregatesFilter | string
  }

  export type ClinicWhereInput = {
    AND?: Enumerable<ClinicWhereInput>
    OR?: Enumerable<ClinicWhereInput>
    NOT?: Enumerable<ClinicWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    email?: StringFilter | string
    address?: StringFilter | string
    coverPhoto?: StringFilter | string
    phoneNumber?: StringFilter | string
    description?: StringFilter | string
    doctorIds?: StringNullableListFilter
    doctors?: DoctorListRelationFilter
  }

  export type ClinicOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coverPhoto?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    doctorIds?: SortOrder
    doctors?: DoctorOrderByRelationAggregateInput
  }

  export type ClinicWhereUniqueInput = {
    id?: string
  }

  export type ClinicOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coverPhoto?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    doctorIds?: SortOrder
    _count?: ClinicCountOrderByAggregateInput
    _max?: ClinicMaxOrderByAggregateInput
    _min?: ClinicMinOrderByAggregateInput
  }

  export type ClinicScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClinicScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClinicScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClinicScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    coverPhoto?: StringWithAggregatesFilter | string
    phoneNumber?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    doctorIds?: StringNullableListFilter
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
    user?: XOR<PulseUserRelationFilter, PulseUserWhereInput>
    userId?: StringFilter | string
    specializationsIds?: StringNullableListFilter
    specializations?: SpecializationListRelationFilter
    clinicId?: StringNullableFilter | string | null
    clinic?: XOR<ClinicRelationFilter, ClinicWhereInput> | null
    description?: JsonNullableFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calLink?: SortOrder
    calUserId?: SortOrder
    user?: PulseUserOrderByWithRelationInput
    userId?: SortOrder
    specializationsIds?: SortOrder
    specializations?: SpecializationOrderByRelationAggregateInput
    clinicId?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    description?: SortOrder
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
    clinicId?: SortOrder
    description?: SortOrder
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
    clinicId?: StringNullableWithAggregatesFilter | string | null
    description?: JsonNullableWithAggregatesFilter
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

  export type FileEntityWhereInput = {
    AND?: Enumerable<FileEntityWhereInput>
    OR?: Enumerable<FileEntityWhereInput>
    NOT?: Enumerable<FileEntityWhereInput>
    id?: StringFilter | string
    fileName?: StringFilter | string
    fileUrl?: StringFilter | string
    key?: StringFilter | string
    authorId?: StringNullableFilter | string | null
    author?: XOR<PulseUserRelationFilter, PulseUserWhereInput> | null
    metadata?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FileEntityOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    key?: SortOrder
    authorId?: SortOrder
    author?: PulseUserOrderByWithRelationInput
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileEntityWhereUniqueInput = {
    id?: string
    authorId?: string
  }

  export type FileEntityOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    key?: SortOrder
    authorId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileEntityCountOrderByAggregateInput
    _max?: FileEntityMaxOrderByAggregateInput
    _min?: FileEntityMinOrderByAggregateInput
  }

  export type FileEntityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FileEntityScalarWhereWithAggregatesInput>
    OR?: Enumerable<FileEntityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FileEntityScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    fileName?: StringWithAggregatesFilter | string
    fileUrl?: StringWithAggregatesFilter | string
    key?: StringWithAggregatesFilter | string
    authorId?: StringNullableWithAggregatesFilter | string | null
    metadata?: JsonWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PharmacyWhereInput = {
    AND?: Enumerable<PharmacyWhereInput>
    OR?: Enumerable<PharmacyWhereInput>
    NOT?: Enumerable<PharmacyWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    label?: StringNullableFilter | string | null
    company?: StringNullableFilter | string | null
    price?: FloatNullableListFilter
    photoUrls?: StringNullableListFilter
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    company?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
  }

  export type PharmacyWhereUniqueInput = {
    id?: string
  }

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    company?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _avg?: PharmacyAvgOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
    _sum?: PharmacySumOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PharmacyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PharmacyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PharmacyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    label?: StringNullableWithAggregatesFilter | string | null
    company?: StringNullableWithAggregatesFilter | string | null
    price?: FloatNullableListFilter
    photoUrls?: StringNullableListFilter
  }

  export type PulseUserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentCreateNestedManyWithoutPatientInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListUncheckedCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListUncheckedCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedCreateNestedManyWithoutPatientInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUncheckedUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUncheckedUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
  }

  export type PulseUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type PulseUserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type ConsulationListCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    author: PulseUserCreateNestedOneWithoutAppointmentsAsAuthorInput
    patient: PulseUserCreateNestedOneWithoutAppointmentsAsPatientInput
  }

  export type ConsulationListUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
    patientId: string
  }

  export type ConsulationListUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    author?: PulseUserUpdateOneRequiredWithoutAppointmentsAsAuthorNestedInput
    patient?: PulseUserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
  }

  export type ConsulationListUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsulationListCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
    patientId: string
  }

  export type ConsulationListUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
  }

  export type ConsulationListUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchDocumentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    author: PulseUserCreateNestedOneWithoutResearchDocumentsAsAuthourInput
    patient: PulseUserCreateNestedOneWithoutResearchDocumentsAsPatientInput
  }

  export type ResearchDocumentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
    patientId: string
  }

  export type ResearchDocumentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    author?: PulseUserUpdateOneRequiredWithoutResearchDocumentsAsAuthourNestedInput
    patient?: PulseUserUpdateOneRequiredWithoutResearchDocumentsAsPatientNestedInput
  }

  export type ResearchDocumentUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchDocumentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
    patientId: string
  }

  export type ResearchDocumentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
  }

  export type ResearchDocumentUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClinicCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    address: string
    coverPhoto: string
    phoneNumber: string
    description: string
    doctorIds?: ClinicCreatedoctorIdsInput | Enumerable<string>
    doctors?: DoctorCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    address: string
    coverPhoto: string
    phoneNumber: string
    description: string
    doctorIds?: ClinicCreatedoctorIdsInput | Enumerable<string>
    doctors?: DoctorUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: ClinicUpdatedoctorIdsInput | Enumerable<string>
    doctors?: DoctorUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: ClinicUpdatedoctorIdsInput | Enumerable<string>
    doctors?: DoctorUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    address: string
    coverPhoto: string
    phoneNumber: string
    description: string
    doctorIds?: ClinicCreatedoctorIdsInput | Enumerable<string>
  }

  export type ClinicUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: ClinicUpdatedoctorIdsInput | Enumerable<string>
  }

  export type ClinicUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: ClinicUpdatedoctorIdsInput | Enumerable<string>
  }

  export type DoctorCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    user: PulseUserCreateNestedOneWithoutDoctorInput
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationCreateNestedManyWithoutDoctorInput
    clinic?: ClinicCreateNestedOneWithoutDoctorsInput
    description?: InputJsonValue | null
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
    clinicId?: string | null
    description?: InputJsonValue | null
  }

  export type DoctorUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    user?: PulseUserUpdateOneRequiredWithoutDoctorNestedInput
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUpdateManyWithoutDoctorNestedInput
    clinic?: ClinicUpdateOneWithoutDoctorsNestedInput
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    userId: string
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    clinicId?: string | null
    description?: InputJsonValue | null
  }

  export type DoctorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: InputJsonValue | InputJsonValue | null
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

  export type FileEntityCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    key: string
    author?: PulseUserCreateNestedOneWithoutAuthoredFilesInput
    metadata?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntityUncheckedCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    key: string
    authorId?: string | null
    metadata?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntityUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    author?: PulseUserUpdateOneWithoutAuthoredFilesNestedInput
    metadata?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntityUncheckedUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntityCreateManyInput = {
    id?: string
    fileName: string
    fileUrl: string
    key: string
    authorId?: string | null
    metadata?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntityUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntityUncheckedUpdateManyInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyCreateInput = {
    id?: string
    name: string
    label?: string | null
    company?: string | null
    price?: PharmacyCreatepriceInput | Enumerable<number>
    photoUrls?: PharmacyCreatephotoUrlsInput | Enumerable<string>
  }

  export type PharmacyUncheckedCreateInput = {
    id?: string
    name: string
    label?: string | null
    company?: string | null
    price?: PharmacyCreatepriceInput | Enumerable<number>
    photoUrls?: PharmacyCreatephotoUrlsInput | Enumerable<string>
  }

  export type PharmacyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    price?: PharmacyUpdatepriceInput | Enumerable<number>
    photoUrls?: PharmacyUpdatephotoUrlsInput | Enumerable<string>
  }

  export type PharmacyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    price?: PharmacyUpdatepriceInput | Enumerable<number>
    photoUrls?: PharmacyUpdatephotoUrlsInput | Enumerable<string>
  }

  export type PharmacyCreateManyInput = {
    id?: string
    name: string
    label?: string | null
    company?: string | null
    price?: PharmacyCreatepriceInput | Enumerable<number>
    photoUrls?: PharmacyCreatephotoUrlsInput | Enumerable<string>
  }

  export type PharmacyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    price?: PharmacyUpdatepriceInput | Enumerable<number>
    photoUrls?: PharmacyUpdatephotoUrlsInput | Enumerable<string>
  }

  export type PharmacyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    price?: PharmacyUpdatepriceInput | Enumerable<number>
    photoUrls?: PharmacyUpdatephotoUrlsInput | Enumerable<string>
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

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type ConsulationListListRelationFilter = {
    every?: ConsulationListWhereInput
    some?: ConsulationListWhereInput
    none?: ConsulationListWhereInput
  }

  export type ResearchDocumentListRelationFilter = {
    every?: ResearchDocumentWhereInput
    some?: ResearchDocumentWhereInput
    none?: ResearchDocumentWhereInput
  }

  export type DoctorRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type FileEntityListRelationFilter = {
    every?: FileEntityWhereInput
    some?: FileEntityWhereInput
    none?: FileEntityWhereInput
  }

  export type ConsulationListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResearchDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileEntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PulseUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
  }

  export type PulseUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
  }

  export type PulseUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    uniqueName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
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

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    isSet?: boolean
  }

  export type PulseUserRelationFilter = {
    is?: PulseUserWhereInput
    isNot?: PulseUserWhereInput
  }

  export type ConsulationListCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type ConsulationListMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type ConsulationListMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
    isSet?: boolean
  }

  export type ResearchDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type ResearchDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type ResearchDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    patientId?: SortOrder
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type DoctorListRelationFilter = {
    every?: DoctorWhereInput
    some?: DoctorWhereInput
    none?: DoctorWhereInput
  }

  export type DoctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClinicCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coverPhoto?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    doctorIds?: SortOrder
  }

  export type ClinicMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coverPhoto?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
  }

  export type ClinicMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coverPhoto?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
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

  export type SpecializationListRelationFilter = {
    every?: SpecializationWhereInput
    some?: SpecializationWhereInput
    none?: SpecializationWhereInput
  }

  export type ClinicRelationFilter = {
    is?: ClinicWhereInput | null
    isNot?: ClinicWhereInput | null
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
    clinicId?: SortOrder
    description?: SortOrder
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
    clinicId?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calLink?: SortOrder
    calUserId?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
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
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type FileEntityCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    key?: SortOrder
    authorId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    key?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileEntityMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    key?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type FloatNullableListFilter = {
    equals?: Enumerable<number> | null
    has?: number | null
    hasEvery?: Enumerable<number>
    hasSome?: Enumerable<number>
    isEmpty?: boolean
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    company?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
  }

  export type PharmacyAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    company?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    company?: SortOrder
  }

  export type PharmacySumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ConsulationListCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutAuthorInput>, Enumerable<ConsulationListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutAuthorInput>
    createMany?: ConsulationListCreateManyAuthorInputEnvelope
    connect?: Enumerable<ConsulationListWhereUniqueInput>
  }

  export type ConsulationListCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutPatientInput>, Enumerable<ConsulationListUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutPatientInput>
    createMany?: ConsulationListCreateManyPatientInputEnvelope
    connect?: Enumerable<ConsulationListWhereUniqueInput>
  }

  export type ResearchDocumentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutAuthorInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutAuthorInput>
    createMany?: ResearchDocumentCreateManyAuthorInputEnvelope
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
  }

  export type ResearchDocumentCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutPatientInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutPatientInput>
    createMany?: ResearchDocumentCreateManyPatientInputEnvelope
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type FileEntityCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<FileEntityCreateWithoutAuthorInput>, Enumerable<FileEntityUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileEntityCreateOrConnectWithoutAuthorInput>
    createMany?: FileEntityCreateManyAuthorInputEnvelope
    connect?: Enumerable<FileEntityWhereUniqueInput>
  }

  export type ConsulationListUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutAuthorInput>, Enumerable<ConsulationListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutAuthorInput>
    createMany?: ConsulationListCreateManyAuthorInputEnvelope
    connect?: Enumerable<ConsulationListWhereUniqueInput>
  }

  export type ConsulationListUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutPatientInput>, Enumerable<ConsulationListUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutPatientInput>
    createMany?: ConsulationListCreateManyPatientInputEnvelope
    connect?: Enumerable<ConsulationListWhereUniqueInput>
  }

  export type ResearchDocumentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutAuthorInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutAuthorInput>
    createMany?: ResearchDocumentCreateManyAuthorInputEnvelope
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
  }

  export type ResearchDocumentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutPatientInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutPatientInput>
    createMany?: ResearchDocumentCreateManyPatientInputEnvelope
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type FileEntityUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<FileEntityCreateWithoutAuthorInput>, Enumerable<FileEntityUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileEntityCreateOrConnectWithoutAuthorInput>
    createMany?: FileEntityCreateManyAuthorInputEnvelope
    connect?: Enumerable<FileEntityWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type ConsulationListUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutAuthorInput>, Enumerable<ConsulationListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ConsulationListUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ConsulationListCreateManyAuthorInputEnvelope
    set?: Enumerable<ConsulationListWhereUniqueInput>
    disconnect?: Enumerable<ConsulationListWhereUniqueInput>
    delete?: Enumerable<ConsulationListWhereUniqueInput>
    connect?: Enumerable<ConsulationListWhereUniqueInput>
    update?: Enumerable<ConsulationListUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ConsulationListUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ConsulationListScalarWhereInput>
  }

  export type ConsulationListUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutPatientInput>, Enumerable<ConsulationListUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<ConsulationListUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: ConsulationListCreateManyPatientInputEnvelope
    set?: Enumerable<ConsulationListWhereUniqueInput>
    disconnect?: Enumerable<ConsulationListWhereUniqueInput>
    delete?: Enumerable<ConsulationListWhereUniqueInput>
    connect?: Enumerable<ConsulationListWhereUniqueInput>
    update?: Enumerable<ConsulationListUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<ConsulationListUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<ConsulationListScalarWhereInput>
  }

  export type ResearchDocumentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutAuthorInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ResearchDocumentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ResearchDocumentCreateManyAuthorInputEnvelope
    set?: Enumerable<ResearchDocumentWhereUniqueInput>
    disconnect?: Enumerable<ResearchDocumentWhereUniqueInput>
    delete?: Enumerable<ResearchDocumentWhereUniqueInput>
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
    update?: Enumerable<ResearchDocumentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ResearchDocumentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ResearchDocumentScalarWhereInput>
  }

  export type ResearchDocumentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutPatientInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<ResearchDocumentUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: ResearchDocumentCreateManyPatientInputEnvelope
    set?: Enumerable<ResearchDocumentWhereUniqueInput>
    disconnect?: Enumerable<ResearchDocumentWhereUniqueInput>
    delete?: Enumerable<ResearchDocumentWhereUniqueInput>
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
    update?: Enumerable<ResearchDocumentUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<ResearchDocumentUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<ResearchDocumentScalarWhereInput>
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

  export type FileEntityUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<FileEntityCreateWithoutAuthorInput>, Enumerable<FileEntityUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileEntityCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<FileEntityUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: FileEntityCreateManyAuthorInputEnvelope
    set?: Enumerable<FileEntityWhereUniqueInput>
    disconnect?: Enumerable<FileEntityWhereUniqueInput>
    delete?: Enumerable<FileEntityWhereUniqueInput>
    connect?: Enumerable<FileEntityWhereUniqueInput>
    update?: Enumerable<FileEntityUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<FileEntityUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<FileEntityScalarWhereInput>
  }

  export type ConsulationListUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutAuthorInput>, Enumerable<ConsulationListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ConsulationListUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ConsulationListCreateManyAuthorInputEnvelope
    set?: Enumerable<ConsulationListWhereUniqueInput>
    disconnect?: Enumerable<ConsulationListWhereUniqueInput>
    delete?: Enumerable<ConsulationListWhereUniqueInput>
    connect?: Enumerable<ConsulationListWhereUniqueInput>
    update?: Enumerable<ConsulationListUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ConsulationListUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ConsulationListScalarWhereInput>
  }

  export type ConsulationListUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<ConsulationListCreateWithoutPatientInput>, Enumerable<ConsulationListUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ConsulationListCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<ConsulationListUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: ConsulationListCreateManyPatientInputEnvelope
    set?: Enumerable<ConsulationListWhereUniqueInput>
    disconnect?: Enumerable<ConsulationListWhereUniqueInput>
    delete?: Enumerable<ConsulationListWhereUniqueInput>
    connect?: Enumerable<ConsulationListWhereUniqueInput>
    update?: Enumerable<ConsulationListUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<ConsulationListUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<ConsulationListScalarWhereInput>
  }

  export type ResearchDocumentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutAuthorInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ResearchDocumentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ResearchDocumentCreateManyAuthorInputEnvelope
    set?: Enumerable<ResearchDocumentWhereUniqueInput>
    disconnect?: Enumerable<ResearchDocumentWhereUniqueInput>
    delete?: Enumerable<ResearchDocumentWhereUniqueInput>
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
    update?: Enumerable<ResearchDocumentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ResearchDocumentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ResearchDocumentScalarWhereInput>
  }

  export type ResearchDocumentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<ResearchDocumentCreateWithoutPatientInput>, Enumerable<ResearchDocumentUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<ResearchDocumentCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<ResearchDocumentUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: ResearchDocumentCreateManyPatientInputEnvelope
    set?: Enumerable<ResearchDocumentWhereUniqueInput>
    disconnect?: Enumerable<ResearchDocumentWhereUniqueInput>
    delete?: Enumerable<ResearchDocumentWhereUniqueInput>
    connect?: Enumerable<ResearchDocumentWhereUniqueInput>
    update?: Enumerable<ResearchDocumentUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<ResearchDocumentUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<ResearchDocumentScalarWhereInput>
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

  export type FileEntityUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<FileEntityCreateWithoutAuthorInput>, Enumerable<FileEntityUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileEntityCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<FileEntityUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: FileEntityCreateManyAuthorInputEnvelope
    set?: Enumerable<FileEntityWhereUniqueInput>
    disconnect?: Enumerable<FileEntityWhereUniqueInput>
    delete?: Enumerable<FileEntityWhereUniqueInput>
    connect?: Enumerable<FileEntityWhereUniqueInput>
    update?: Enumerable<FileEntityUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<FileEntityUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<FileEntityScalarWhereInput>
  }

  export type PulseUserCreateNestedOneWithoutAppointmentsAsAuthorInput = {
    create?: XOR<PulseUserCreateWithoutAppointmentsAsAuthorInput, PulseUserUncheckedCreateWithoutAppointmentsAsAuthorInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutAppointmentsAsAuthorInput
    connect?: PulseUserWhereUniqueInput
  }

  export type PulseUserCreateNestedOneWithoutAppointmentsAsPatientInput = {
    create?: XOR<PulseUserCreateWithoutAppointmentsAsPatientInput, PulseUserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutAppointmentsAsPatientInput
    connect?: PulseUserWhereUniqueInput
  }

  export type PulseUserUpdateOneRequiredWithoutAppointmentsAsAuthorNestedInput = {
    create?: XOR<PulseUserCreateWithoutAppointmentsAsAuthorInput, PulseUserUncheckedCreateWithoutAppointmentsAsAuthorInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutAppointmentsAsAuthorInput
    upsert?: PulseUserUpsertWithoutAppointmentsAsAuthorInput
    connect?: PulseUserWhereUniqueInput
    update?: XOR<PulseUserUpdateWithoutAppointmentsAsAuthorInput, PulseUserUncheckedUpdateWithoutAppointmentsAsAuthorInput>
  }

  export type PulseUserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput = {
    create?: XOR<PulseUserCreateWithoutAppointmentsAsPatientInput, PulseUserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutAppointmentsAsPatientInput
    upsert?: PulseUserUpsertWithoutAppointmentsAsPatientInput
    connect?: PulseUserWhereUniqueInput
    update?: XOR<PulseUserUpdateWithoutAppointmentsAsPatientInput, PulseUserUncheckedUpdateWithoutAppointmentsAsPatientInput>
  }

  export type PulseUserCreateNestedOneWithoutResearchDocumentsAsAuthourInput = {
    create?: XOR<PulseUserCreateWithoutResearchDocumentsAsAuthourInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsAuthourInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutResearchDocumentsAsAuthourInput
    connect?: PulseUserWhereUniqueInput
  }

  export type PulseUserCreateNestedOneWithoutResearchDocumentsAsPatientInput = {
    create?: XOR<PulseUserCreateWithoutResearchDocumentsAsPatientInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsPatientInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutResearchDocumentsAsPatientInput
    connect?: PulseUserWhereUniqueInput
  }

  export type PulseUserUpdateOneRequiredWithoutResearchDocumentsAsAuthourNestedInput = {
    create?: XOR<PulseUserCreateWithoutResearchDocumentsAsAuthourInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsAuthourInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutResearchDocumentsAsAuthourInput
    upsert?: PulseUserUpsertWithoutResearchDocumentsAsAuthourInput
    connect?: PulseUserWhereUniqueInput
    update?: XOR<PulseUserUpdateWithoutResearchDocumentsAsAuthourInput, PulseUserUncheckedUpdateWithoutResearchDocumentsAsAuthourInput>
  }

  export type PulseUserUpdateOneRequiredWithoutResearchDocumentsAsPatientNestedInput = {
    create?: XOR<PulseUserCreateWithoutResearchDocumentsAsPatientInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsPatientInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutResearchDocumentsAsPatientInput
    upsert?: PulseUserUpsertWithoutResearchDocumentsAsPatientInput
    connect?: PulseUserWhereUniqueInput
    update?: XOR<PulseUserUpdateWithoutResearchDocumentsAsPatientInput, PulseUserUncheckedUpdateWithoutResearchDocumentsAsPatientInput>
  }

  export type ClinicCreatedoctorIdsInput = {
    set: Enumerable<string>
  }

  export type DoctorCreateNestedManyWithoutClinicInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutClinicInput>, Enumerable<DoctorUncheckedCreateWithoutClinicInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutClinicInput>
    createMany?: DoctorCreateManyClinicInputEnvelope
    connect?: Enumerable<DoctorWhereUniqueInput>
  }

  export type DoctorUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutClinicInput>, Enumerable<DoctorUncheckedCreateWithoutClinicInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutClinicInput>
    createMany?: DoctorCreateManyClinicInputEnvelope
    connect?: Enumerable<DoctorWhereUniqueInput>
  }

  export type ClinicUpdatedoctorIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type DoctorUpdateManyWithoutClinicNestedInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutClinicInput>, Enumerable<DoctorUncheckedCreateWithoutClinicInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutClinicInput>
    upsert?: Enumerable<DoctorUpsertWithWhereUniqueWithoutClinicInput>
    createMany?: DoctorCreateManyClinicInputEnvelope
    set?: Enumerable<DoctorWhereUniqueInput>
    disconnect?: Enumerable<DoctorWhereUniqueInput>
    delete?: Enumerable<DoctorWhereUniqueInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
    update?: Enumerable<DoctorUpdateWithWhereUniqueWithoutClinicInput>
    updateMany?: Enumerable<DoctorUpdateManyWithWhereWithoutClinicInput>
    deleteMany?: Enumerable<DoctorScalarWhereInput>
  }

  export type DoctorUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutClinicInput>, Enumerable<DoctorUncheckedCreateWithoutClinicInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutClinicInput>
    upsert?: Enumerable<DoctorUpsertWithWhereUniqueWithoutClinicInput>
    createMany?: DoctorCreateManyClinicInputEnvelope
    set?: Enumerable<DoctorWhereUniqueInput>
    disconnect?: Enumerable<DoctorWhereUniqueInput>
    delete?: Enumerable<DoctorWhereUniqueInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
    update?: Enumerable<DoctorUpdateWithWhereUniqueWithoutClinicInput>
    updateMany?: Enumerable<DoctorUpdateManyWithWhereWithoutClinicInput>
    deleteMany?: Enumerable<DoctorScalarWhereInput>
  }

  export type PulseUserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<PulseUserCreateWithoutDoctorInput, PulseUserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutDoctorInput
    connect?: PulseUserWhereUniqueInput
  }

  export type DoctorCreatespecializationsIdsInput = {
    set: Enumerable<string>
  }

  export type SpecializationCreateNestedManyWithoutDoctorInput = {
    create?: XOR<Enumerable<SpecializationCreateWithoutDoctorInput>, Enumerable<SpecializationUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<SpecializationCreateOrConnectWithoutDoctorInput>
    connect?: Enumerable<SpecializationWhereUniqueInput>
  }

  export type ClinicCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<ClinicCreateWithoutDoctorsInput, ClinicUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutDoctorsInput
    connect?: ClinicWhereUniqueInput
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

  export type PulseUserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<PulseUserCreateWithoutDoctorInput, PulseUserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutDoctorInput
    upsert?: PulseUserUpsertWithoutDoctorInput
    connect?: PulseUserWhereUniqueInput
    update?: XOR<PulseUserUpdateWithoutDoctorInput, PulseUserUncheckedUpdateWithoutDoctorInput>
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

  export type ClinicUpdateOneWithoutDoctorsNestedInput = {
    create?: XOR<ClinicCreateWithoutDoctorsInput, ClinicUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutDoctorsInput
    upsert?: ClinicUpsertWithoutDoctorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<ClinicUpdateWithoutDoctorsInput, ClinicUncheckedUpdateWithoutDoctorsInput>
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

  export type PulseUserCreateNestedOneWithoutAuthoredFilesInput = {
    create?: XOR<PulseUserCreateWithoutAuthoredFilesInput, PulseUserUncheckedCreateWithoutAuthoredFilesInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutAuthoredFilesInput
    connect?: PulseUserWhereUniqueInput
  }

  export type PulseUserUpdateOneWithoutAuthoredFilesNestedInput = {
    create?: XOR<PulseUserCreateWithoutAuthoredFilesInput, PulseUserUncheckedCreateWithoutAuthoredFilesInput>
    connectOrCreate?: PulseUserCreateOrConnectWithoutAuthoredFilesInput
    upsert?: PulseUserUpsertWithoutAuthoredFilesInput
    disconnect?: boolean
    delete?: boolean
    connect?: PulseUserWhereUniqueInput
    update?: XOR<PulseUserUpdateWithoutAuthoredFilesInput, PulseUserUncheckedUpdateWithoutAuthoredFilesInput>
  }

  export type PharmacyCreatepriceInput = {
    set: Enumerable<number>
  }

  export type PharmacyCreatephotoUrlsInput = {
    set: Enumerable<string>
  }

  export type PharmacyUpdatepriceInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type PharmacyUpdatephotoUrlsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
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

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
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
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type ConsulationListCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    patient: PulseUserCreateNestedOneWithoutAppointmentsAsPatientInput
  }

  export type ConsulationListUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    patientId: string
  }

  export type ConsulationListCreateOrConnectWithoutAuthorInput = {
    where: ConsulationListWhereUniqueInput
    create: XOR<ConsulationListCreateWithoutAuthorInput, ConsulationListUncheckedCreateWithoutAuthorInput>
  }

  export type ConsulationListCreateManyAuthorInputEnvelope = {
    data: Enumerable<ConsulationListCreateManyAuthorInput>
  }

  export type ConsulationListCreateWithoutPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    author: PulseUserCreateNestedOneWithoutAppointmentsAsAuthorInput
  }

  export type ConsulationListUncheckedCreateWithoutPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
  }

  export type ConsulationListCreateOrConnectWithoutPatientInput = {
    where: ConsulationListWhereUniqueInput
    create: XOR<ConsulationListCreateWithoutPatientInput, ConsulationListUncheckedCreateWithoutPatientInput>
  }

  export type ConsulationListCreateManyPatientInputEnvelope = {
    data: Enumerable<ConsulationListCreateManyPatientInput>
  }

  export type ResearchDocumentCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    patient: PulseUserCreateNestedOneWithoutResearchDocumentsAsPatientInput
  }

  export type ResearchDocumentUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    patientId: string
  }

  export type ResearchDocumentCreateOrConnectWithoutAuthorInput = {
    where: ResearchDocumentWhereUniqueInput
    create: XOR<ResearchDocumentCreateWithoutAuthorInput, ResearchDocumentUncheckedCreateWithoutAuthorInput>
  }

  export type ResearchDocumentCreateManyAuthorInputEnvelope = {
    data: Enumerable<ResearchDocumentCreateManyAuthorInput>
  }

  export type ResearchDocumentCreateWithoutPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    author: PulseUserCreateNestedOneWithoutResearchDocumentsAsAuthourInput
  }

  export type ResearchDocumentUncheckedCreateWithoutPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
  }

  export type ResearchDocumentCreateOrConnectWithoutPatientInput = {
    where: ResearchDocumentWhereUniqueInput
    create: XOR<ResearchDocumentCreateWithoutPatientInput, ResearchDocumentUncheckedCreateWithoutPatientInput>
  }

  export type ResearchDocumentCreateManyPatientInputEnvelope = {
    data: Enumerable<ResearchDocumentCreateManyPatientInput>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationCreateNestedManyWithoutDoctorInput
    clinic?: ClinicCreateNestedOneWithoutDoctorsInput
    description?: InputJsonValue | null
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedCreateNestedManyWithoutDoctorInput
    clinicId?: string | null
    description?: InputJsonValue | null
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type FileEntityCreateWithoutAuthorInput = {
    id?: string
    fileName: string
    fileUrl: string
    key: string
    metadata?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntityUncheckedCreateWithoutAuthorInput = {
    id?: string
    fileName: string
    fileUrl: string
    key: string
    metadata?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntityCreateOrConnectWithoutAuthorInput = {
    where: FileEntityWhereUniqueInput
    create: XOR<FileEntityCreateWithoutAuthorInput, FileEntityUncheckedCreateWithoutAuthorInput>
  }

  export type FileEntityCreateManyAuthorInputEnvelope = {
    data: Enumerable<FileEntityCreateManyAuthorInput>
  }

  export type ConsulationListUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ConsulationListWhereUniqueInput
    update: XOR<ConsulationListUpdateWithoutAuthorInput, ConsulationListUncheckedUpdateWithoutAuthorInput>
    create: XOR<ConsulationListCreateWithoutAuthorInput, ConsulationListUncheckedCreateWithoutAuthorInput>
  }

  export type ConsulationListUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ConsulationListWhereUniqueInput
    data: XOR<ConsulationListUpdateWithoutAuthorInput, ConsulationListUncheckedUpdateWithoutAuthorInput>
  }

  export type ConsulationListUpdateManyWithWhereWithoutAuthorInput = {
    where: ConsulationListScalarWhereInput
    data: XOR<ConsulationListUpdateManyMutationInput, ConsulationListUncheckedUpdateManyWithoutAppointmentsAsAuthorInput>
  }

  export type ConsulationListScalarWhereInput = {
    AND?: Enumerable<ConsulationListScalarWhereInput>
    OR?: Enumerable<ConsulationListScalarWhereInput>
    NOT?: Enumerable<ConsulationListScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    content?: JsonNullableFilter
    authorId?: StringFilter | string
    patientId?: StringFilter | string
  }

  export type ConsulationListUpsertWithWhereUniqueWithoutPatientInput = {
    where: ConsulationListWhereUniqueInput
    update: XOR<ConsulationListUpdateWithoutPatientInput, ConsulationListUncheckedUpdateWithoutPatientInput>
    create: XOR<ConsulationListCreateWithoutPatientInput, ConsulationListUncheckedCreateWithoutPatientInput>
  }

  export type ConsulationListUpdateWithWhereUniqueWithoutPatientInput = {
    where: ConsulationListWhereUniqueInput
    data: XOR<ConsulationListUpdateWithoutPatientInput, ConsulationListUncheckedUpdateWithoutPatientInput>
  }

  export type ConsulationListUpdateManyWithWhereWithoutPatientInput = {
    where: ConsulationListScalarWhereInput
    data: XOR<ConsulationListUpdateManyMutationInput, ConsulationListUncheckedUpdateManyWithoutAppointmentsAsPatientInput>
  }

  export type ResearchDocumentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ResearchDocumentWhereUniqueInput
    update: XOR<ResearchDocumentUpdateWithoutAuthorInput, ResearchDocumentUncheckedUpdateWithoutAuthorInput>
    create: XOR<ResearchDocumentCreateWithoutAuthorInput, ResearchDocumentUncheckedCreateWithoutAuthorInput>
  }

  export type ResearchDocumentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ResearchDocumentWhereUniqueInput
    data: XOR<ResearchDocumentUpdateWithoutAuthorInput, ResearchDocumentUncheckedUpdateWithoutAuthorInput>
  }

  export type ResearchDocumentUpdateManyWithWhereWithoutAuthorInput = {
    where: ResearchDocumentScalarWhereInput
    data: XOR<ResearchDocumentUpdateManyMutationInput, ResearchDocumentUncheckedUpdateManyWithoutResearchDocumentsAsAuthourInput>
  }

  export type ResearchDocumentScalarWhereInput = {
    AND?: Enumerable<ResearchDocumentScalarWhereInput>
    OR?: Enumerable<ResearchDocumentScalarWhereInput>
    NOT?: Enumerable<ResearchDocumentScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    content?: JsonNullableFilter
    authorId?: StringFilter | string
    patientId?: StringFilter | string
  }

  export type ResearchDocumentUpsertWithWhereUniqueWithoutPatientInput = {
    where: ResearchDocumentWhereUniqueInput
    update: XOR<ResearchDocumentUpdateWithoutPatientInput, ResearchDocumentUncheckedUpdateWithoutPatientInput>
    create: XOR<ResearchDocumentCreateWithoutPatientInput, ResearchDocumentUncheckedCreateWithoutPatientInput>
  }

  export type ResearchDocumentUpdateWithWhereUniqueWithoutPatientInput = {
    where: ResearchDocumentWhereUniqueInput
    data: XOR<ResearchDocumentUpdateWithoutPatientInput, ResearchDocumentUncheckedUpdateWithoutPatientInput>
  }

  export type ResearchDocumentUpdateManyWithWhereWithoutPatientInput = {
    where: ResearchDocumentScalarWhereInput
    data: XOR<ResearchDocumentUpdateManyMutationInput, ResearchDocumentUncheckedUpdateManyWithoutResearchDocumentsAsPatientInput>
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
    clinic?: ClinicUpdateOneWithoutDoctorsNestedInput
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: InputJsonValue | InputJsonValue | null
  }

  export type FileEntityUpsertWithWhereUniqueWithoutAuthorInput = {
    where: FileEntityWhereUniqueInput
    update: XOR<FileEntityUpdateWithoutAuthorInput, FileEntityUncheckedUpdateWithoutAuthorInput>
    create: XOR<FileEntityCreateWithoutAuthorInput, FileEntityUncheckedCreateWithoutAuthorInput>
  }

  export type FileEntityUpdateWithWhereUniqueWithoutAuthorInput = {
    where: FileEntityWhereUniqueInput
    data: XOR<FileEntityUpdateWithoutAuthorInput, FileEntityUncheckedUpdateWithoutAuthorInput>
  }

  export type FileEntityUpdateManyWithWhereWithoutAuthorInput = {
    where: FileEntityScalarWhereInput
    data: XOR<FileEntityUpdateManyMutationInput, FileEntityUncheckedUpdateManyWithoutAuthoredFilesInput>
  }

  export type FileEntityScalarWhereInput = {
    AND?: Enumerable<FileEntityScalarWhereInput>
    OR?: Enumerable<FileEntityScalarWhereInput>
    NOT?: Enumerable<FileEntityScalarWhereInput>
    id?: StringFilter | string
    fileName?: StringFilter | string
    fileUrl?: StringFilter | string
    key?: StringFilter | string
    authorId?: StringNullableFilter | string | null
    metadata?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PulseUserCreateWithoutAppointmentsAsAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsPatient?: ConsulationListCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentCreateNestedManyWithoutPatientInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserUncheckedCreateWithoutAppointmentsAsAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsPatient?: ConsulationListUncheckedCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedCreateNestedManyWithoutPatientInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserCreateOrConnectWithoutAppointmentsAsAuthorInput = {
    where: PulseUserWhereUniqueInput
    create: XOR<PulseUserCreateWithoutAppointmentsAsAuthorInput, PulseUserUncheckedCreateWithoutAppointmentsAsAuthorInput>
  }

  export type PulseUserCreateWithoutAppointmentsAsPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListCreateNestedManyWithoutAuthorInput
    researchDocumentsAsAuthour?: ResearchDocumentCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentCreateNestedManyWithoutPatientInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserUncheckedCreateWithoutAppointmentsAsPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListUncheckedCreateNestedManyWithoutAuthorInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedCreateNestedManyWithoutPatientInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserCreateOrConnectWithoutAppointmentsAsPatientInput = {
    where: PulseUserWhereUniqueInput
    create: XOR<PulseUserCreateWithoutAppointmentsAsPatientInput, PulseUserUncheckedCreateWithoutAppointmentsAsPatientInput>
  }

  export type PulseUserUpsertWithoutAppointmentsAsAuthorInput = {
    update: XOR<PulseUserUpdateWithoutAppointmentsAsAuthorInput, PulseUserUncheckedUpdateWithoutAppointmentsAsAuthorInput>
    create: XOR<PulseUserCreateWithoutAppointmentsAsAuthorInput, PulseUserUncheckedCreateWithoutAppointmentsAsAuthorInput>
  }

  export type PulseUserUpdateWithoutAppointmentsAsAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsPatient?: ConsulationListUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUncheckedUpdateWithoutAppointmentsAsAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsPatient?: ConsulationListUncheckedUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUpsertWithoutAppointmentsAsPatientInput = {
    update: XOR<PulseUserUpdateWithoutAppointmentsAsPatientInput, PulseUserUncheckedUpdateWithoutAppointmentsAsPatientInput>
    create: XOR<PulseUserCreateWithoutAppointmentsAsPatientInput, PulseUserUncheckedCreateWithoutAppointmentsAsPatientInput>
  }

  export type PulseUserUpdateWithoutAppointmentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUncheckedUpdateWithoutAppointmentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUncheckedUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserCreateWithoutResearchDocumentsAsAuthourInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListCreateNestedManyWithoutPatientInput
    researchDocumentsAsPatient?: ResearchDocumentCreateNestedManyWithoutPatientInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserUncheckedCreateWithoutResearchDocumentsAsAuthourInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListUncheckedCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListUncheckedCreateNestedManyWithoutPatientInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedCreateNestedManyWithoutPatientInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserCreateOrConnectWithoutResearchDocumentsAsAuthourInput = {
    where: PulseUserWhereUniqueInput
    create: XOR<PulseUserCreateWithoutResearchDocumentsAsAuthourInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsAuthourInput>
  }

  export type PulseUserCreateWithoutResearchDocumentsAsPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentCreateNestedManyWithoutAuthorInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserUncheckedCreateWithoutResearchDocumentsAsPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListUncheckedCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListUncheckedCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedCreateNestedManyWithoutAuthorInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    authoredFiles?: FileEntityUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserCreateOrConnectWithoutResearchDocumentsAsPatientInput = {
    where: PulseUserWhereUniqueInput
    create: XOR<PulseUserCreateWithoutResearchDocumentsAsPatientInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsPatientInput>
  }

  export type PulseUserUpsertWithoutResearchDocumentsAsAuthourInput = {
    update: XOR<PulseUserUpdateWithoutResearchDocumentsAsAuthourInput, PulseUserUncheckedUpdateWithoutResearchDocumentsAsAuthourInput>
    create: XOR<PulseUserCreateWithoutResearchDocumentsAsAuthourInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsAuthourInput>
  }

  export type PulseUserUpdateWithoutResearchDocumentsAsAuthourInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUpdateManyWithoutPatientNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUncheckedUpdateWithoutResearchDocumentsAsAuthourInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUncheckedUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUncheckedUpdateManyWithoutPatientNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUpsertWithoutResearchDocumentsAsPatientInput = {
    update: XOR<PulseUserUpdateWithoutResearchDocumentsAsPatientInput, PulseUserUncheckedUpdateWithoutResearchDocumentsAsPatientInput>
    create: XOR<PulseUserCreateWithoutResearchDocumentsAsPatientInput, PulseUserUncheckedCreateWithoutResearchDocumentsAsPatientInput>
  }

  export type PulseUserUpdateWithoutResearchDocumentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUpdateManyWithoutAuthorNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUncheckedUpdateWithoutResearchDocumentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUncheckedUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUncheckedUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedUpdateManyWithoutAuthorNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    authoredFiles?: FileEntityUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DoctorCreateWithoutClinicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    user: PulseUserCreateNestedOneWithoutDoctorInput
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationCreateNestedManyWithoutDoctorInput
    description?: InputJsonValue | null
  }

  export type DoctorUncheckedCreateWithoutClinicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    userId: string
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedCreateNestedManyWithoutDoctorInput
    description?: InputJsonValue | null
  }

  export type DoctorCreateOrConnectWithoutClinicInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutClinicInput, DoctorUncheckedCreateWithoutClinicInput>
  }

  export type DoctorCreateManyClinicInputEnvelope = {
    data: Enumerable<DoctorCreateManyClinicInput>
  }

  export type DoctorUpsertWithWhereUniqueWithoutClinicInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutClinicInput, DoctorUncheckedUpdateWithoutClinicInput>
    create: XOR<DoctorCreateWithoutClinicInput, DoctorUncheckedCreateWithoutClinicInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutClinicInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutClinicInput, DoctorUncheckedUpdateWithoutClinicInput>
  }

  export type DoctorUpdateManyWithWhereWithoutClinicInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutDoctorsInput>
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
    clinicId?: StringNullableFilter | string | null
    description?: JsonNullableFilter
  }

  export type PulseUserCreateWithoutDoctorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentCreateNestedManyWithoutPatientInput
    authoredFiles?: FileEntityCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserUncheckedCreateWithoutDoctorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListUncheckedCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListUncheckedCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedCreateNestedManyWithoutPatientInput
    authoredFiles?: FileEntityUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PulseUserCreateOrConnectWithoutDoctorInput = {
    where: PulseUserWhereUniqueInput
    create: XOR<PulseUserCreateWithoutDoctorInput, PulseUserUncheckedCreateWithoutDoctorInput>
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

  export type ClinicCreateWithoutDoctorsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    address: string
    coverPhoto: string
    phoneNumber: string
    description: string
    doctorIds?: ClinicCreatedoctorIdsInput | Enumerable<string>
  }

  export type ClinicUncheckedCreateWithoutDoctorsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    address: string
    coverPhoto: string
    phoneNumber: string
    description: string
    doctorIds?: ClinicCreatedoctorIdsInput | Enumerable<string>
  }

  export type ClinicCreateOrConnectWithoutDoctorsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutDoctorsInput, ClinicUncheckedCreateWithoutDoctorsInput>
  }

  export type PulseUserUpsertWithoutDoctorInput = {
    update: XOR<PulseUserUpdateWithoutDoctorInput, PulseUserUncheckedUpdateWithoutDoctorInput>
    create: XOR<PulseUserCreateWithoutDoctorInput, PulseUserUncheckedCreateWithoutDoctorInput>
  }

  export type PulseUserUpdateWithoutDoctorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUpdateManyWithoutPatientNestedInput
    authoredFiles?: FileEntityUpdateManyWithoutAuthorNestedInput
  }

  export type PulseUserUncheckedUpdateWithoutDoctorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUncheckedUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUncheckedUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedUpdateManyWithoutPatientNestedInput
    authoredFiles?: FileEntityUncheckedUpdateManyWithoutAuthorNestedInput
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

  export type ClinicUpsertWithoutDoctorsInput = {
    update: XOR<ClinicUpdateWithoutDoctorsInput, ClinicUncheckedUpdateWithoutDoctorsInput>
    create: XOR<ClinicCreateWithoutDoctorsInput, ClinicUncheckedCreateWithoutDoctorsInput>
  }

  export type ClinicUpdateWithoutDoctorsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: ClinicUpdatedoctorIdsInput | Enumerable<string>
  }

  export type ClinicUncheckedUpdateWithoutDoctorsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorIds?: ClinicUpdatedoctorIdsInput | Enumerable<string>
  }

  export type DoctorCreateWithoutSpecializationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    user: PulseUserCreateNestedOneWithoutDoctorInput
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    clinic?: ClinicCreateNestedOneWithoutDoctorsInput
    description?: InputJsonValue | null
  }

  export type DoctorUncheckedCreateWithoutSpecializationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    userId: string
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    clinicId?: string | null
    description?: InputJsonValue | null
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

  export type PulseUserCreateWithoutAuthoredFilesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentCreateNestedManyWithoutPatientInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type PulseUserUncheckedCreateWithoutAuthoredFilesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fullName: string
    uniqueName: string
    phoneNumber: string
    address: string
    avatar?: string | null
    role?: Role
    appointmentsAsAuthor?: ConsulationListUncheckedCreateNestedManyWithoutAuthorInput
    appointmentsAsPatient?: ConsulationListUncheckedCreateNestedManyWithoutPatientInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedCreateNestedManyWithoutAuthorInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedCreateNestedManyWithoutPatientInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type PulseUserCreateOrConnectWithoutAuthoredFilesInput = {
    where: PulseUserWhereUniqueInput
    create: XOR<PulseUserCreateWithoutAuthoredFilesInput, PulseUserUncheckedCreateWithoutAuthoredFilesInput>
  }

  export type PulseUserUpsertWithoutAuthoredFilesInput = {
    update: XOR<PulseUserUpdateWithoutAuthoredFilesInput, PulseUserUncheckedUpdateWithoutAuthoredFilesInput>
    create: XOR<PulseUserCreateWithoutAuthoredFilesInput, PulseUserUncheckedCreateWithoutAuthoredFilesInput>
  }

  export type PulseUserUpdateWithoutAuthoredFilesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type PulseUserUncheckedUpdateWithoutAuthoredFilesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointmentsAsAuthor?: ConsulationListUncheckedUpdateManyWithoutAuthorNestedInput
    appointmentsAsPatient?: ConsulationListUncheckedUpdateManyWithoutPatientNestedInput
    researchDocumentsAsAuthour?: ResearchDocumentUncheckedUpdateManyWithoutAuthorNestedInput
    researchDocumentsAsPatient?: ResearchDocumentUncheckedUpdateManyWithoutPatientNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ConsulationListCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    patientId: string
  }

  export type ConsulationListCreateManyPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
  }

  export type ResearchDocumentCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    patientId: string
  }

  export type ResearchDocumentCreateManyPatientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: InputJsonValue | null
    authorId: string
  }

  export type FileEntityCreateManyAuthorInput = {
    id?: string
    fileName: string
    fileUrl: string
    key: string
    metadata?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsulationListUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    patient?: PulseUserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
  }

  export type ConsulationListUncheckedUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsulationListUncheckedUpdateManyWithoutAppointmentsAsAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsulationListUpdateWithoutPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    author?: PulseUserUpdateOneRequiredWithoutAppointmentsAsAuthorNestedInput
  }

  export type ConsulationListUncheckedUpdateWithoutPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsulationListUncheckedUpdateManyWithoutAppointmentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchDocumentUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    patient?: PulseUserUpdateOneRequiredWithoutResearchDocumentsAsPatientNestedInput
  }

  export type ResearchDocumentUncheckedUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchDocumentUncheckedUpdateManyWithoutResearchDocumentsAsAuthourInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchDocumentUpdateWithoutPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    author?: PulseUserUpdateOneRequiredWithoutResearchDocumentsAsAuthourNestedInput
  }

  export type ResearchDocumentUncheckedUpdateWithoutPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchDocumentUncheckedUpdateManyWithoutResearchDocumentsAsPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: InputJsonValue | InputJsonValue | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type FileEntityUpdateWithoutAuthorInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntityUncheckedUpdateWithoutAuthorInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntityUncheckedUpdateManyWithoutAuthoredFilesInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateManyClinicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calLink?: string
    calUserId?: number
    userId: string
    specializationsIds?: DoctorCreatespecializationsIdsInput | Enumerable<string>
    description?: InputJsonValue | null
  }

  export type DoctorUpdateWithoutClinicInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    user?: PulseUserUpdateOneRequiredWithoutDoctorNestedInput
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUpdateManyWithoutDoctorNestedInput
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorUncheckedUpdateWithoutClinicInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    specializations?: SpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorUncheckedUpdateManyWithoutDoctorsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    description?: InputJsonValue | InputJsonValue | null
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
    user?: PulseUserUpdateOneRequiredWithoutDoctorNestedInput
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    clinic?: ClinicUpdateOneWithoutDoctorsNestedInput
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorUncheckedUpdateWithoutSpecializationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: InputJsonValue | InputJsonValue | null
  }

  export type DoctorUncheckedUpdateManyWithoutDoctorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calLink?: StringFieldUpdateOperationsInput | string
    calUserId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    specializationsIds?: DoctorUpdatespecializationsIdsInput | Enumerable<string>
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: InputJsonValue | InputJsonValue | null
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