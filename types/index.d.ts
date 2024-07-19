export module BareMetaTypes {
  /**
   * An object that defines endpoint reassignments. Keys represent original endpoints, and values represent their replacement endpoints.
   * @example `{ "proxy": "current" }` enables requests to `/bare/proxy` to be redirected to `/bare/current`.
   */
  export interface ReassignEndpoints {
    [key: string]: string;
  }

  /**
   * An object that defines header reassignments. Keys represent original header names, and values represent their replacement values.
   * @example `{ "x-bare-url": "x-any-url" }` replaces the `x-bare-url` header with `x-any-url`.
   */
  export interface ReassignHeaders {
    [key: string]: string;
  }

  /**
   * Encapsulates both endpoint and header reassignment configurations.
   */
  export interface Reassign {
    /**
     * Reassigned endpoints.
     */
    endpoints: ReassignEndpoints;

    /**
     * Reassigned headers.
     */
    headers: ReassignHeaders;
  }

  /**
   * Describes a supported specification.
   */
  export interface SupportedSpecifications {
    /**
     * The entity or organization that created or supports the specification.
     */
    by: string;

    /**
     * The name of the specification.
     */
    name: string;

    /**
     * The endpoint or URL associated with the specification.
     */
    endpoint: string;
  }

  /**
   * Provides information about system load indicators.
   */
  export interface LoadIndicators {
    /**
     * Total memory available (in kb).
     */
    memoryTotal: string;

    /**
     * Free memory available (in kb).
     */
    memoryFree: string;

    /**
     * Number of active connections.
     */
    activeConns: string;

    /**
     * Current system latency (in ms).
     */
    latency: string;
  }

  /**
   * Information about the maintainer of the project.
   */
  export interface Maintainer {
    /**
     * The maintainer's email address.
     */
    email: string;

    /**
     * The maintainer's website.
     */
    website: string;
  }

  /**
   * Information about the implementation itself.
   */
  export interface Project {
    /**
     * The name of the project.
     */
    name: string;

    /**
     * A description of the project.
     */
    description: string;

    /**
     * The project's email address.
     */
    email: string;

    /**
     * The project's website.
     */
    website: string;

    /**
     * The project's repository URL.
     */
    repository: string;

    /**
     * The short SHA-1 hash of the project's repository.
     * @see https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection
     */
    commitHash: string;

    /**
     * The current version of the project.
     * Consider this an alternative to the `commitHash` property.
     */
    version: string;
  }

  /**
   * The primary interface for the bare meta.
   */
  export interface Meta {
    /**
     * Encapsulates both endpoint and header reassignments.
     */
    reassign: Reassign;

    /**
     * An array of supported specifications. These allow future additions to the specification and support for specific edge cases.
     */
    supportedSpecifications: SupportedSpecifications[];

    /**
     * Indicates whether the system or data is secured
     */
    isSecured: boolean;

    /**
     * System load indicators.
     */
    loadIndicators: LoadIndicators;

    /**
     * Information about the project maintainer.
     */
    maintainer: Maintainer;

    /**
     * Information to identify the implementation used by the server.
     */
    project: Project;
  }
}
