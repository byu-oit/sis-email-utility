/* eslint-disable */

import * as request from 'superagent'
import { SuperAgentStatic, SuperAgentRequest, Response } from 'superagent'

export type RequestHeaders = {
  [header: string]: string
}
export type RequestHeadersHandler = (headers: RequestHeaders) => RequestHeaders

export type ConfigureAgentHandler = (agent: SuperAgentStatic) => SuperAgentStatic

export type ConfigureRequestHandler = (agent: SuperAgentRequest) => SuperAgentRequest

export type CallbackHandler = (err: any, res?: request.Response) => void

export type address = {
  links?: {
    addresses__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    addresses__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    addresses__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  address_type?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    key: boolean
  } & {
    [key: string]: any
  }
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  address_line_1?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  address_line_2?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  address_line_3?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  address_line_4?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  building?: {
    value: string
    description?: string
    long_description?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  room?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  country_code?: country_code
  city?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  state_code?: {
    value: string
    description?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  postal_code?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  unlisted?: unlisted
  verified_flag?: verified_flag
} & {
  [key: string]: any
}

export type address_put = {
  created_datetime?: string
  created_by_byu_id?: string
  updated_datetime?: string
  updated_by_byu_id?: string
  address_line_1: string
  address_line_2: string
  address_line_3?: string
  address_line_4?: string
  building?: string
  room?: string
  country_code: string
  city: string
  state_code?: string
  postal_code?: string
  unlisted?: boolean
  verified_flag?: boolean
} & {
  [key: string]: any
}

export type addresses = {
  links?: {
    addresses__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    addresses__create?: {
      rel: 'addresses__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<address>
} & {
  [key: string]: any
}

export type alias_domain = {
  quantity?: {
    value: number
    api_type: 'derived'
  } & {
    [key: string]: any
  }
  alias_domain?: {
    value: string
    api_type: 'system'
  } & {
    [key: string]: any
  }
  limit?: {
    value: number
    api_type: 'system'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type alias_domains = {
  links?: {
    alias_domains__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<alias_domain>
} & {
  [key: string]: any
}

export type basic = {
  links?: {
    basic__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    basic__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    basic__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  byu_id?: byu_id
  person_id?: {
    value: string
    api_type: 'system'
  } & {
    [key: string]: any
  }
  net_id?: net_id
  personal_email_address?: {
    value?: string
    api_type: 'related'
    related_resource: string
  } & {
    [key: string]: any
  }
  primary_phone_number?: {
    value: string
    api_type: 'related'
    related_resource: string
  } & {
    [key: string]: any
  }
  deceased?: {
    value?: boolean
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  sex?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  first_name?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  middle_name?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  surname?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  suffix?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  preferred_first_name?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  preferred_surname?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  rest_of_name?: {
    value: string
    api_type: 'derived'
  } & {
    [key: string]: any
  }
  name_lnf?: {
    value: string
    api_type: 'derived'
  } & {
    [key: string]: any
  }
  name_fnf?: {
    value: string
    api_type: 'derived'
  } & {
    [key: string]: any
  }
  preferred_name?: {
    value: string
    api_type: 'derived'
  } & {
    [key: string]: any
  }
  home_town?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  home_state_code?: {
    value: string
    description?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  home_country_code?: {
    value: string
    description?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  merge_in_process?: {
    value?: boolean
    api_type: 'derived'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type personal_record = {
  links?: {
    personal_record__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    personal_record__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  net_id?: net_id
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  birthday?: {
    value?: string
    api_type?: string
  } & {
    [key: string]: any
  }
  date_of_death?: {
    value?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  religion_code?: {
    value: string
    description?: string
    api_type: 'read-only' | 'modifiable'
    domain?: string
  } & {
    [key: string]: any
  }
  religion_tenure?: {
    value?: number
    api_type?: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  visa_type?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    domain?: string
  } & {
    [key: string]: any
  }
  visa_type_source?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  i20_expiration_date?: {
    value?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  high_school_code?: {
    value: string
    description?: string
    api_type: 'read-only' | 'modifiable'
    domain?: string
  } & {
    [key: string]: any
  }
  high_school_city?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  high_school_state_code?: {
    value: string
    description?: string
    api_type: 'related'
    related_resource?: string
    domain?: string
  } & {
    [key: string]: any
  }
  citizenship_country_code?: {
    value: string
    description?: string
    api_type: 'read-only' | 'modifiable'
    domain?: string
  } & {
    [key: string]: any
  }
  birth_country_code?: {
    value: string
    description?: string
    api_type: 'modifiable' | 'read-only'
    domain?: string
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type vital_record = {
  links?: {
    vital_record__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    vital_record__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  net_id?: net_id
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  age?: {
    value?: number
    api_type?: string
  } & {
    [key: string]: any
  }
  date_of_birth?: {
    value?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  marital_status?: {
    value: string
    description?: 'Divorced' | 'Married' | 'Single' | 'Unknown' | 'Widowed'
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  restricted?: {
    value?: boolean
    api_type?: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type basic_put = {
  updated_datetime?: string
  updated_by_byu_id?: string
  sex?: '?' | 'F' | 'M'
  surname: string
  first_name: string
  preferred_surname?: string
  preferred_first_name?: string
  middle_name?: string
  suffix?: string
  home_town?: string
  home_state_code?: string
  home_country_code?: string
} & {
  [key: string]: any
}

export type personal_record_put = {
  updated_datetime?: string
  updated_by_byu_id?: string
  deceased?: boolean
  date_of_death?: string
  religion_code: string
  citizenship_country_code?: string
  birth_country_code?: string
  high_school_code?: string
  visa_type?: string
  i20_expiration_date?: string
  visa_type_source?: 'ADM' | 'FSA' | 'HR' | 'INTL' | ' '
  religion_tenure?: number
} & {
  [key: string]: any
}

export type vital_record_put = {
  updated_datetime?: string
  updated_by_byu_id?: string
  date_of_birth?: string
  marital_status?: 'D' | 'M' | 'S' | 'W' | '?'
  restricted?: boolean
} & {
  [key: string]: any
}

export type byu_id = {
  value: string
  description?: string
  api_type: 'system'
  key: boolean
} & {
  [key: string]: any
}

export type cache = {
  date_time?: string
} & {
  [key: string]: any
}

export type cell_flag = {
  value: boolean
  api_type: 'read-only' | 'modifiable'
} & {
  [key: string]: any
}

export type country_code = {
  value: string
  description?: string
  api_type: 'read-only' | 'modifiable'
  domain?: string
} & {
  [key: string]: any
}

export type created_by_byu_id = {
  value: string
  description?: string
  api_type: 'system'
} & {
  [key: string]: any
}

export type credential = {
  links?: {
    credentials__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    credentials__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    credentials__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  credential_type?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    key?: boolean
  } & {
    [key: string]: any
  }
  credential_id?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    key?: boolean
  } & {
    [key: string]: any
  }
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  user_name?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  lost_or_stolen?: {
    value: boolean
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  status?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  expiration_date?: expiration_date
  issuing_location?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  physical_form?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  associated_device?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  scoped_affiliation?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type credential_put = {
  created_datetime?: string
  created_by_byu_id?: string
  updated_datetime?: string
  updated_by_byu_id?: string
  user_name?: string
  lost_or_stolen?: boolean
  status?: string
  expiration_date?: string
  issuing_location?: string
  physical_form?: string
  associated_device?: string
  scoped_affiliation?: string
} & {
  [key: string]: any
}

export type credentials = {
  links?: {
    credentials__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    credentials__create?: {
      rel: 'credentials__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<credential>
} & {
  [key: string]: any
}

export type created_datetime = {
  value?: string
  api_type: 'system'
} & {
  [key: string]: any
}

export type inactivated_date = {
  value?: string
  api_type: 'system'
} & {
  [key: string]: any
}

export type updated_datetime = {
  value?: string
  api_type: 'system'
} & {
  [key: string]: any
}

export type department = {
  value: string
  api_type: 'related'
  related_resource: string
  domain: string
} & {
  [key: string]: any
}

export type effective_date = {
  value?: string
  api_type: 'system'
} & {
  [key: string]: any
}

export type email_address = {
  links?: {
    email_addresses__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    email_addresses__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    email_addresses__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  email_address_type?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    key: boolean
  } & {
    [key: string]: any
  }
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  email_address?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  unlisted?: unlisted
  verified_flag?: verified_flag
} & {
  [key: string]: any
}

export type email_addresses = {
  links?: {
    email_addresses__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    email_addresses__create?: {
      rel: 'email_addresses__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<email_address>
} & {
  [key: string]: any
}

export type email_alias = {
  links?: {
    email_aliases__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    email_aliases__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    email_aliases__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  email_alias?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    key?: boolean
  } & {
    [key: string]: any
  }
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  forwards_to?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  expired_date?: {
    value?: string
    api_type?: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  comments?: {
    value?: string
    api_type?: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type email_alias_put = {
  updated_datetime?: string
  updated_by_byu_id?: string
  created_datetime?: string
  created_by_byu_id?: string
  forwards_to: string
  expired_date?: string
  comments?: string
  old_byu_id?: string
  reassign?: boolean
} & {
  [key: string]: any
}

export type email_aliases = {
  links?: {
    email_aliases__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    email_aliases__create?: {
      rel: 'email_aliases__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<email_alias>
} & {
  [key: string]: any
}

export type email_put = {
  updated_datetime?: string
  updated_by_byu_id?: string
  email_address: string
  unlisted?: boolean
  verified_flag?: boolean
} & {
  [key: string]: any
}

export type employee_summary = {
  links?: {
    employee_summary__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  employee_role?: employee_role
  employee_classification_code?: {
    value?: string
    description?: string
    api_type?: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  employee_status_code?: {
    value?: string
    description?: string
    api_type?: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  employee_standing_code?: {
    value?: string
    description?: string
    api_type?: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  department?: department
  job_code?: job_code
  hire_date?: {
    value?: string
    api_type?: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  reports_to_byu_id?: {
    value?: string
    description?: string
    api_type?: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type employee_role = {
  value?: string
  description?: string
  api_type?: 'derived'
  related_resource?: string
} & {
  [key: string]: any
}

export type link = {
  rel?: string
  href?: string
  method?: 'GET'
} & {
  [key: string]: any
}

export type error_response = {
  links?: {
    addresses__info?: link
    alias_domains__info?: link
    basic__info?: link
    credentials__info?: link
    email_addresses__info?: link
    email_aliases__info?: link
    employee_summary__info?: link
    family_phones__info?: link
    group_memberships__info?: link
    groups_administered__info?: link
    id_card__info?: link
    languages_info?: link
    personal_record__info?: link
    phones__info?: link
    relationships__info?: link
    student_summary__info?: link
    vital_record__info?: link
  } & {
    [key: string]: any
  }
  metadata: simple_metadata
} & {
  [key: string]: any
}

export type expiration_date = {
  value?: string
  api_type: 'read-only' | 'modifiable'
} & {
  [key: string]: any
}

export type family_phone = {
  links?: {
    family_phones__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    family_phones__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    family_phones__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  phone_type?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    key: boolean
  } & {
    [key: string]: any
  }
  lookup_number?: lookup_number
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  phone_number?: phone_number
  country_code?: country_code
  country_number?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  cell_flag?: cell_flag
  texts_okay?: texts_okay
  preferred_language_code?: {
    value: string
    description?: string
    api_type: 'read-only' | 'modifiable'
    domain?: string
  } & {
    [key: string]: any
  }
  contact_person?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  relationship?: {
    value?: string
    api_type?: 'modifiable' | 'read-only'
  } & {
    [key: string]: any
  }
  verified_flag?: verified_flag
} & {
  [key: string]: any
}

export type family_phone_put = {
  created_datetime?: string
  created_by_byu_id?: string
  updated_datetime?: string
  updated_by_byu_id?: string
  country_code: string
  phone_number?: string
  cell_flag?: boolean
  preferred_language_code?: string
  texts_okay?: boolean
  contact_person: string
  relationship: string
  verified_flag?: boolean
} & {
  [key: string]: any
}

export type family_phones = {
  links?: {
    family_phones__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    family_phones__create?: {
      rel: 'family_phones__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<family_phone>
} & {
  [key: string]: any
}

export type group_administered = {
  links?: {
    groups_administered__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    groups_administered__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    groups_administered__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  group_id?: group_id
  group_type?: group_type
  created_by_byu_id?: created_by_byu_id
  effective_date?: effective_date
  expiration_date?: {
    value?: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  group_description?: group_description
  inactivated_date?: inactivated_date
  inactivated_by_byu_id?: inactivated_by_byu_id
  byu_id?: byu_id
  job_code?: job_code
  department?: department
  employee_role?: employee_role
  is_owner?: {
    value?: boolean
    api_type?: string
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type group_administered_put = {
  owner_flag: boolean
} & {
  [key: string]: any
}

export type group_description = {
  value: string
  api_type: 'read-only'
} & {
  [key: string]: any
}

export type group_id = {
  value: string
  description?: string
  api_type: 'read-only'
  key?: boolean
} & {
  [key: string]: any
}

export type group_membership = {
  links?: {
    group_memberships__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    group_memberships__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    group_memberships__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  group_id?: group_id
  group_type?: group_type
  byu_id?: byu_id
  job_code?: job_code
  department?: department
  employee_role?: employee_role
  membership_type?: {
    value?: string
    api_type?: string
  } & {
    [key: string]: any
  }
  implied_by?: {
    value_array?: Array<
      {
        value?: string
        description?: string
        api_type?: string
      } & {
        [key: string]: any
      }
    >
    api_type?: string
  } & {
    [key: string]: any
  }
  effective_date?: {
    value?: string
    api_type?: string
  } & {
    [key: string]: any
  }
  expiration_date?: {
    value?: string
    api_type?: string
  } & {
    [key: string]: any
  }
  granted_by_byu_id?: {
    value?: string
    description?: string
    api_type?: string
  } & {
    [key: string]: any
  }
  granted_datetime?: {
    value?: string
    api_type?: string
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type group_memberships = {
  links?: {
    group_memberships__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    group_memberships__create?: {
      rel: 'group_memberships__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<group_membership>
} & {
  [key: string]: any
}

export type group_type = {
  value: string
  api_type: 'read-only'
} & {
  [key: string]: any
}

export type groups_administered = {
  links?: {
    groups_administered__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<group_administered>
} & {
  [key: string]: any
}

export type id_card = {
  links?: {
    id_card__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    id_card__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  physical_form?: {
    value: string
    api_type: 'read-only'
  } & {
    [key: string]: any
  }
  site_id?: {
    value: string
    api_type: 'read-only'
  } & {
    [key: string]: any
  }
  dtf_flag?: {
    value: boolean
    api_type: 'read-only'
  } & {
    [key: string]: any
  }
  unlisted?: unlisted
  printed_name?: {
    value: string
    api_type: 'read-only'
  } & {
    [key: string]: any
  }
  primary_role_when_issued?: {
    value: string
    api_type: 'read-only'
  } & {
    [key: string]: any
  }
  secondary_role_when_issued?: {
    value: string
    api_type: 'read-only'
  } & {
    [key: string]: any
  }
  beard_flag?: {
    value: boolean
    api_type: 'read-only'
  } & {
    [key: string]: any
  }
  use_preferred_name_on_id_card?: {
    value: boolean
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type id_card_put = {
  updated_datetime?: string
  updated_by_byu_id?: string
  unlisted?: boolean
  use_preferred_name_on_id_card?: boolean
} & {
  [key: string]: any
}

export type inactivated_by_byu_id = {
  value: string
  description?: string
  api_type: 'read-only'
} & {
  [key: string]: any
}

export type job_code = {
  value: string
  description?: string
  api_type: 'related'
  related_resource: string
} & {
  [key: string]: any
}

export type language = {
  links?: {
    languages__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    languages__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    languages__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  language_code?: {
    value: string
    description: string
    long_description: string
    api_type: 'read-only' | 'modifiable'
    key?: boolean
  } & {
    [key: string]: any
  }
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  speak_proficiency?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  read_proficiency?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  write_proficiency?: {
    value: string
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  native?: {
    value: boolean
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  translator?: {
    value: boolean
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type language_put = {
  created_datetime?: string
  created_by_byu_id?: string
  updated_datetime?: string
  updated_by_byu_id?: string
  speak_proficiency: 'H' | 'M' | 'L' | 'N'
  read_proficiency: 'H' | 'M' | 'L' | 'N'
  write_proficiency: 'H' | 'M' | 'L' | 'N'
  native: boolean
  translator: boolean
} & {
  [key: string]: any
}

export type languages = {
  links?: {
    languages__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    languages__create?: {
      rel: 'languages__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<language>
} & {
  [key: string]: any
}

export type lookup_number = {
  value: string
  api_type: 'read-only' | 'modifiable'
  key: boolean
} & {
  [key: string]: any
}

export type net_id = {
  value: string
  api_type: 'related'
  related_resource?: string
} & {
  [key: string]: any
}

export type person = {
  links?: {
    persons__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: {
    restricted?: boolean
    collection_size?: number
    field_sets_returned: Array<
      | 'basic'
      | 'addresses'
      | 'alias_domains'
      | 'credentials'
      | 'email_addresses'
      | 'email_aliases'
      | 'employee_summary'
      | 'family_phones'
      | 'vital_record'
      | 'group_memberships'
      | 'groups_administered'
      | 'id_card'
      | 'languages'
      | 'personal_record'
      | 'phones'
      | 'relationships'
      | 'student_summary'
    >
    field_sets_available: Array<
      | 'basic'
      | 'addresses'
      | 'alias_domains'
      | 'credentials'
      | 'email_addresses'
      | 'email_aliases'
      | 'employee_summary'
      | 'family_phones'
      | 'vital_record'
      | 'group_memberships'
      | 'groups_administered'
      | 'id_card'
      | 'languages'
      | 'personal_record'
      | 'phones'
      | 'relationships'
      | 'student_summary'
    >
    field_sets_default: Array<'basic'>
    contexts_available: {
      all?: Array<
        | 'basic'
        | 'addresses'
        | 'alias_domains'
        | 'credentials'
        | 'email_addresses'
        | 'email_aliases'
        | 'employee_summary'
        | 'family_phones'
        | 'vital_record'
        | 'group_memberships'
        | 'groups_administered'
        | 'id_card'
        | 'languages'
        | 'personal_record'
        | 'phones'
        | 'relationships'
        | 'student_summary'
      >
      contact?: Array<'basic' | 'addresses' | 'email_addresses' | 'family_phones' | 'phones'>
      official?: Array<'credentials' | 'vital_record' | 'personal_record' | 'id_card'>
      emergency?: Array<'family_phones' | 'relationships'>
      person?: Array<'basic' | 'personal_record' | 'vital_record'>
    } & {
      [key: string]: any
    }
    validation_response?: validation_response
    validation_information?: validation_information
    cache?: cache
  } & {
    [key: string]: any
  }
  basic?: basic
  addresses?: addresses
  alias_domains?: alias_domains
  credentials?: credentials
  email_addresses?: email_addresses
  email_aliases?: email_aliases
  employee_summary?: employee_summary
  family_phones?: family_phones
  vital_record?: vital_record
  group_memberships?: group_memberships
  groups_administered?: groups_administered
  id_card?: id_card
  languages?: languages
  personal_record?: personal_record
  phones?: phones
  relationships?: relationships
  student_summary?: student_summary
} & {
  [key: string]: any
}

export type person_post = {
  byu_id?: string
  person_id?: string
  created_datetime?: string
  created_by_byu_id?: string
  updated_datetime?: string
  updated_by_byu_id?: string
  sex?: '?' | 'F' | 'M'
  surname?: string
  first_name?: string
  preferred_surname?: string
  preferred_first_name?: string
  middle_name?: string
  suffix?: string
  home_town?: string
  home_state_code?: string
  home_country_code?: string
} & {
  [key: string]: any
}

export type persons = {
  links?: {
    persons__info?: {
      rel: 'self'
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    persons__first?: {
      rel: 'persons__first'
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    persons__last?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    persons__current?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    persons__next?: {
      rel?: string
      href?: string
      method?: 'GET'
    } & {
      [key: string]: any
    }
    persons__prev?: {
      rel?: string
      href?: string
      method?: 'GET'
    } & {
      [key: string]: any
    }
    persons__create?: {
      rel: string
      href: string
      method: 'POST'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: top_level_metadata
  values: Array<person>
} & {
  [key: string]: any
}

export type phone = {
  links?: {
    phones__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    phones__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    phones__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  lookup_number?: lookup_number
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  country_number?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  phone_number?: phone_number
  country_code?: country_code
  cell_flag?: cell_flag
  time_code?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    domain?: string
  } & {
    [key: string]: any
  }
  texts_okay?: texts_okay
  unlisted?: unlisted
  primary_flag?: primary_flag
  tty?: {
    value: boolean
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
  verified_flag?: verified_flag
  work_flag?: {
    value: boolean
    api_type: 'read-only' | 'modifiable'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type phone_number = {
  value: string
  api_type: 'read-only' | 'modifiable'
} & {
  [key: string]: any
}

export type phone_put = {
  created_datetime?: string
  created_by_byu_id?: string
  updated_datetime?: string
  updated_by_byu_id?: string
  country_code: string
  phone_number?: string
  cell_flag?: boolean
  time_code?: string
  texts_okay?: boolean
  unlisted?: boolean
  primary_flag?: boolean
  tty?: boolean
  work_flag?: boolean
  verified_flag?: boolean
} & {
  [key: string]: any
}

export type phones = {
  links?: {
    phones__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    phones__create?: {
      rel: 'phones__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<phone>
} & {
  [key: string]: any
}

export type primary_flag = {
  value: boolean
  api_type: 'read-only' | 'modifiable'
} & {
  [key: string]: any
}

export type relationship = {
  links?: {
    relationships__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    relationships__modify?: {
      rel: string
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
    relationships__delete?: {
      rel: string
      href: string
      method: 'DELETE'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  related_byu_id?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    key?: boolean
  } & {
    [key: string]: any
  }
  related_net_id?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  relationship_type?: {
    value: string
    api_type: 'read-only' | 'modifiable'
    domain?: string
  } & {
    [key: string]: any
  }
  related_name_lnf?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  related_name_fnf?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  related_preferred_name?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  related_surname?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  related_rest_of_name?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  related_preferred_surname?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  related_preferred_first_name?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  updated_datetime?: updated_datetime
  updated_by_byu_id?: updated_by_byu_id
  created_datetime?: created_datetime
  created_by_byu_id?: created_by_byu_id
  verified_datetime?: {
    value?: string
    api_type: 'system'
  } & {
    [key: string]: any
  }
  verified_by_byu_id?: {
    value: string
    description?: string
    api_type: 'system'
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type relationship_put = {
  created_datetime?: string
  created_by_byu_id?: string
  updated_datetime?: string
  updated_by_byu_id?: string
  relationship_type: string
  verified_datetime?: string
  verified_by_byu_id?: string
} & {
  [key: string]: any
}

export type relationships = {
  links?: {
    relationships__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
    relationships__create?: {
      rel: 'relationships__create'
      href: string
      method: 'PUT'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  values?: Array<relationship>
} & {
  [key: string]: any
}

export type simple_metadata = {
  collection_size?: number
  restricted?: boolean
  validation_response: validation_response
  validation_information?: validation_information
  cache?: cache
} & {
  [key: string]: any
}

export type student_summary = {
  links?: {
    student_summary__info?: {
      rel: string
      href: string
      method: 'GET'
    } & {
      [key: string]: any
    }
  } & {
    [key: string]: any
  }
  metadata?: simple_metadata
  byu_id?: byu_id
  student_status?: {
    value: string
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  current_student?: {
    value: boolean
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  eligible_to_register?: {
    value: boolean
    api_type: 'related'
    related_resource?: string
  } & {
    [key: string]: any
  }
  attended_byu?: {
    value?: boolean
    api_type?: string
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type paging_metadata = {
  page_start?: number
  page_end?: number
  page_size?: number
  default_page_size?: number
  maximum_page_size?: number
} & {
  [key: string]: any
}

export type search_metadata = {
  search_contexts_available?: {
    person_lookup?: Array<string>
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type texts_okay = {
  value: boolean
  api_type: 'read-only' | 'modifiable'
} & {
  [key: string]: any
}

export type top_level_metadata = {
  field_sets_returned: Array<
    | 'basic'
    | 'addresses'
    | 'alias_domains'
    | 'credentials'
    | 'email_addresses'
    | 'email_aliases'
    | 'employee_summary'
    | 'family_phones'
    | 'vital_record'
    | 'group_memberships'
    | 'groups_administered'
    | 'id_card'
    | 'languages'
    | 'personal_record'
    | 'phones'
    | 'relationships'
    | 'student_summary'
  >
  field_sets_available: Array<
    | 'basic'
    | 'addresses'
    | 'alias_domains'
    | 'credentials'
    | 'email_addresses'
    | 'email_aliases'
    | 'employee_summary'
    | 'family_phones'
    | 'vital_record'
    | 'group_memberships'
    | 'groups_administered'
    | 'id_card'
    | 'languages'
    | 'personal_record'
    | 'phones'
    | 'relationships'
    | 'student_summary'
  >
  field_sets_default: Array<'basic'>
  contexts_available: {
    all?: Array<
      | 'basic'
      | 'addresses'
      | 'credentials'
      | 'email_addresses'
      | 'employee_summary'
      | 'family_phones'
      | 'vital_record'
      | 'group_memberships'
      | 'groups_administered'
      | 'id_card'
      | 'languages'
      | 'personal_record'
      | 'phones'
      | 'relationships'
      | 'student_summary'
    >
    contact?: Array<'basic' | 'addresses' | 'email_addresses' | 'family_phones' | 'phones'>
    official?: Array<'credentials' | 'vital_record' | 'personal_record' | 'id_card'>
    emergency?: Array<'family_phones' | 'relationships'>
    person?: Array<'basic' | 'personal_record' | 'vital_record'>
  } & {
    [key: string]: any
  }
  page_start?: number
  page_end?: number
  page_size?: number
  default_page_size?: number
  maximum_page_size?: number
  search_contexts_available?: {
    person_lookup?: Array<string>
  } & {
    [key: string]: any
  }
  collection_size?: number
  restricted?: boolean
  validation_response: validation_response
  validation_information?: validation_information
  cache?: cache
}

export type unlisted = {
  value: boolean
  api_type: 'read-only' | 'modifiable'
} & {
  [key: string]: any
}

export type updated_by_byu_id = {
  value: string
  description?: string
  api_type: 'system'
} & {
  [key: string]: any
}

export type validation_information = Array<string>

export type validation_response = {
  code: number
  message: string
} & {
  [key: string]: any
}

export type verified_flag = {
  value: boolean
  api_type: 'read-only' | 'modifiable'
} & {
  [key: string]: any
}

export type event_header = {
  domain?: string
  entity?: string
  event_type?: string
  source_dt?: string
} & {
  [key: string]: any
}

export type event_body = {} & {
  [key: string]: any
}

export type event = {
  event_header: event_header
  filters: {
    filter?: Array<filter>
  } & {
    [key: string]: any
  }
  event_body: event_body
  history?: Array<event_header>
} & {
  [key: string]: any
}

export type filter = {
  filter_name?: string
  filter_value?: string
} & {
  [key: string]: any
}

export type events = {
  events: {
    event: Array<event>
  } & {
    [key: string]: any
  }
} & {
  [key: string]: any
}

export type Logger = {
  log: (line: string) => any
}

export interface ResponseWithBody<S extends number, T> extends Response {
  status: S
  body: T
}

export type QueryParameters = {
  [param: string]: any
}

export interface CommonRequestOptions {
  $queryParameters?: QueryParameters
  $domain?: string
  $path?: string | ((path: string) => string)
  $retries?: number // number of retries; see: https://github.com/visionmedia/superagent/blob/master/docs/index.md#retrying-requests
  $timeout?: number // request timeout in milliseconds; see: https://github.com/visionmedia/superagent/blob/master/docs/index.md#timeouts
  $deadline?: number // request deadline in milliseconds; see: https://github.com/visionmedia/superagent/blob/master/docs/index.md#timeouts
}

/**
 * Persons Resource of the University API
 * @class Test
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class Test {
  private domain: string = 'https://api.byu.edu/byuapi/persons'
  private errorHandlers: CallbackHandler[] = []
  private requestHeadersHandler?: RequestHeadersHandler
  private configureAgentHandler?: ConfigureAgentHandler
  private configureRequestHandler?: ConfigureRequestHandler

  constructor(domain?: string, private logger?: Logger) {
    if (domain) {
      this.domain = domain
    }
  }

  getDomain() {
    return this.domain
  }

  addErrorHandler(handler: CallbackHandler) {
    this.errorHandlers.push(handler)
  }

  setRequestHeadersHandler(handler: RequestHeadersHandler) {
    this.requestHeadersHandler = handler
  }

  setConfigureAgentHandler(handler: ConfigureAgentHandler) {
    this.configureAgentHandler = handler
  }

  setConfigureRequestHandler(handler: ConfigureRequestHandler) {
    this.configureRequestHandler = handler
  }

  private request(
    method: string,
    url: string,
    body: any,
    headers: RequestHeaders,
    queryParameters: QueryParameters,
    form: any,
    reject: CallbackHandler,
    resolve: CallbackHandler,
    opts: CommonRequestOptions
  ) {
    if (this.logger) {
      this.logger.log(`Call ${method} ${url}`)
    }

    const agent = this.configureAgentHandler ? this.configureAgentHandler(request.default) : request.default

    let req = agent(method, url)
    if (this.configureRequestHandler) {
      req = this.configureRequestHandler(req)
    }

    req = req.query(queryParameters)

    if (body) {
      req.send(body)

      if (typeof body === 'object' && !(body.constructor.name === 'Buffer')) {
        headers['Content-Type'] = 'application/json'
      }
    }

    if (Object.keys(form).length > 0) {
      req.type('form')
      req.send(form)
    }

    if (this.requestHeadersHandler) {
      headers = this.requestHeadersHandler({
        ...headers
      })
    }

    req.set(headers)

    if (opts.$retries && opts.$retries > 0) {
      req.retry(opts.$retries)
    }

    if ((opts.$timeout && opts.$timeout > 0) || (opts.$deadline && opts.$deadline > 0)) {
      req.timeout({
        deadline: opts.$deadline,
        response: opts.$timeout
      })
    }

    req.end((error, response) => {
      // an error will also be emitted for a 4xx and 5xx status code
      // the error object will then have error.status and error.response fields
      // see superagent error handling: https://github.com/visionmedia/superagent/blob/master/docs/index.md#error-handling
      if (error) {
        reject(error)
        this.errorHandlers.forEach(handler => handler(error))
      } else {
        resolve(response)
      }
    })
  }

  getPersonsURL(
    parameters: {
      searchContext?: string
      searchText?: string
      byuIds?: Array<string>
      personIds?: Array<string>
      netIds?: Array<string>
      credentialsCredentialType?: string
      credentialsCredentialId?: string
      credentialsUserNames?: Array<string>
      emailAddressesEmailAddress?: string
      emailAliasesEmailAlias?: string
      phonesPhoneNumbers?: Array<string>
      surname?: string
      restOfName?: string
      preferredSurname?: string
      preferredFirstName?: string
      sex?: '?' | 'F' | 'M' | 'f' | 'm'
      deceased?: boolean
      vitalRecordMaritalStatus?: '?' | 'D' | 'M' | 'S' | 'W' | 'd' | 'm' | 's' | 'w'
      personalRecordReligionCode?: string
      personalRecordCitizenshipCountryCode?: string
      homeTown?: string
      homeStateCode?: string
      homeCountryCode?: string
      restricted?: boolean
      personalRecordVisaType?: string
      employeeSummaryEmployeeRole?: string
      studentSummaryStudentStatus?: string
      groupMembershipsGroupIds?: Array<string>
      groupsAdministeredGroupId?: string
      fieldSets?: Array<
        | 'basic'
        | 'addresses'
        | 'alias_domains'
        | 'credentials'
        | 'email_addresses'
        | 'email_aliases'
        | 'employee_summary'
        | 'family_phones'
        | 'vital_record'
        | 'group_memberships'
        | 'groups_administered'
        | 'id_card'
        | 'languages'
        | 'personal_record'
        | 'phones'
        | 'relationships'
        | 'student_summary'
      >
      contexts?: Array<'all' | 'contact' | 'emergency' | 'official' | 'person'>
      pageStart?: number
      pageSize?: number
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    if (parameters['searchContext'] !== undefined) {
      queryParameters['search_context'] = parameters['searchContext']
    }

    if (parameters['searchText'] !== undefined) {
      queryParameters['search_text'] = parameters['searchText']
    }

    if (parameters['byuIds'] !== undefined) {
      queryParameters['byu_ids'] = parameters['byuIds']
    }

    if (parameters['personIds'] !== undefined) {
      queryParameters['person_ids'] = parameters['personIds']
    }

    if (parameters['netIds'] !== undefined) {
      queryParameters['net_ids'] = parameters['netIds']
    }

    if (parameters['credentialsCredentialType'] !== undefined) {
      queryParameters['credentials.credential_type'] = parameters['credentialsCredentialType']
    }

    if (parameters['credentialsCredentialId'] !== undefined) {
      queryParameters['credentials.credential_id'] = parameters['credentialsCredentialId']
    }

    if (parameters['credentialsUserNames'] !== undefined) {
      queryParameters['credentials.user_names'] = parameters['credentialsUserNames']
    }

    if (parameters['emailAddressesEmailAddress'] !== undefined) {
      queryParameters['email_addresses.email_address'] = parameters['emailAddressesEmailAddress']
    }

    if (parameters['emailAliasesEmailAlias'] !== undefined) {
      queryParameters['email_aliases.email_alias'] = parameters['emailAliasesEmailAlias']
    }

    if (parameters['phonesPhoneNumbers'] !== undefined) {
      queryParameters['phones.phone_numbers'] = parameters['phonesPhoneNumbers']
    }

    if (parameters['surname'] !== undefined) {
      queryParameters['surname'] = parameters['surname']
    }

    if (parameters['restOfName'] !== undefined) {
      queryParameters['rest_of_name'] = parameters['restOfName']
    }

    if (parameters['preferredSurname'] !== undefined) {
      queryParameters['preferred_surname'] = parameters['preferredSurname']
    }

    if (parameters['preferredFirstName'] !== undefined) {
      queryParameters['preferred_first_name'] = parameters['preferredFirstName']
    }

    if (parameters['sex'] !== undefined) {
      queryParameters['sex'] = parameters['sex']
    }

    if (parameters['deceased'] !== undefined) {
      queryParameters['deceased'] = parameters['deceased']
    }

    if (parameters['vitalRecordMaritalStatus'] !== undefined) {
      queryParameters['vital_record.marital_status'] = parameters['vitalRecordMaritalStatus']
    }

    if (parameters['personalRecordReligionCode'] !== undefined) {
      queryParameters['personal_record.religion_code'] = parameters['personalRecordReligionCode']
    }

    if (parameters['personalRecordCitizenshipCountryCode'] !== undefined) {
      queryParameters['personal_record.citizenship_country_code'] = parameters['personalRecordCitizenshipCountryCode']
    }

    if (parameters['homeTown'] !== undefined) {
      queryParameters['home_town'] = parameters['homeTown']
    }

    if (parameters['homeStateCode'] !== undefined) {
      queryParameters['home_state_code'] = parameters['homeStateCode']
    }

    if (parameters['homeCountryCode'] !== undefined) {
      queryParameters['home_country_code'] = parameters['homeCountryCode']
    }

    if (parameters['restricted'] !== undefined) {
      queryParameters['restricted'] = parameters['restricted']
    }

    if (parameters['personalRecordVisaType'] !== undefined) {
      queryParameters['personal_record.visa_type'] = parameters['personalRecordVisaType']
    }

    if (parameters['employeeSummaryEmployeeRole'] !== undefined) {
      queryParameters['employee_summary.employee_role'] = parameters['employeeSummaryEmployeeRole']
    }

    if (parameters['studentSummaryStudentStatus'] !== undefined) {
      queryParameters['student_summary.student_status'] = parameters['studentSummaryStudentStatus']
    }

    if (parameters['groupMembershipsGroupIds'] !== undefined) {
      queryParameters['group_memberships.group_ids'] = parameters['groupMembershipsGroupIds']
    }

    if (parameters['groupsAdministeredGroupId'] !== undefined) {
      queryParameters['groups_administered.group_id'] = parameters['groupsAdministeredGroupId']
    }

    if (parameters['fieldSets'] !== undefined) {
      queryParameters['field_sets'] = parameters['fieldSets']
    }

    if (parameters['contexts'] !== undefined) {
      queryParameters['contexts'] = parameters['contexts']
    }

    if (parameters['pageStart'] !== undefined) {
      queryParameters['page_start'] = parameters['pageStart']
    }

    if (parameters['pageSize'] !== undefined) {
      queryParameters['page_size'] = parameters['pageSize']
    }

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns a collection of Persons
   * @method
   * @name Test#getPersons
   * @param {string} searchContext - The search context to use.
   * @param {string} searchText - The text to search for in the specified context.
   * @param {array} byuIds - The person's BYU ID
   * @param {array} personIds - The person's person ID
   * @param {array} netIds - The person's Net ID
   * @param {string} credentialsCredentialType - The type of credential being looked up
   * @param {string} credentialsCredentialId - The credential id
   * @param {array} credentialsUserNames - The user name belonging to the credential type
   * @param {string} emailAddressesEmailAddress - The person's PERSONAL email address. A case-insensitive search is performed.  A wildcard character is automatically appended.
   * @param {string} emailAliasesEmailAlias - The person's email alias. A case-insensitive search is performed.  A wildcard character is automatically appended.
   * @param {array} phonesPhoneNumbers - The person's phone number.  A numerics-only search is performed. Search multiple numbers separated by commas
   * @param {string} surname - The person's surname.  A case-insensitive search is performed.  You may insert '*' wildcards anywhere in the string, and a wildcard character is automatically appended.
   * @param {string} restOfName - The person's given names.  A case-insensitive search is performed.
   * @param {string} preferredSurname - The person's preferred surname.  A case-insensitive search is performed.
   * @param {string} preferredFirstName - The person's preferred first name.  A case-insensitive search is performed.
   * @param {string} sex - The person's sex
   * @param {boolean} deceased - The person's deceased status
   * @param {string} vitalRecordMaritalStatus - The person's marital status
   * @param {string} personalRecordReligionCode - The person's religion, validated through the meta/religion service
   * @param {string} personalRecordCitizenshipCountryCode - The person's citizenship, validated through the meta/country service
   * @param {string} homeTown - The person's home town
   * @param {string} homeStateCode - The person's home state, validated through the meta/state service
   * @param {string} homeCountryCode - The person's home country code, validated through the meta/country service
   * @param {boolean} restricted - The FERPA restricted status
   * @param {string} personalRecordVisaType - The person's visa type, validated through the meta/visa_type service
   * @param {string} employeeSummaryEmployeeRole - The person's employee type in XXX-XX-XXX format. (See the meta/employee_role service)
   * @param {string} studentSummaryStudentStatus - The person's student status.  Provided by Student Status Info service
   * @param {array} groupMembershipsGroupIds - Returns a collection of people who are members of group_id. Group ID must match exactly
   * @param {string} groupsAdministeredGroupId - Returns a collection of people who are administrators of group_id. Group ID must match exactly
   * @param {array} fieldSets - indicates which field sets are to be returned
   * @param {array} contexts - indicates which contexts are to be returned
   * @param {integer} pageStart - Which page to start on, Must be greater than 0
   * @param {integer} pageSize - Size of the collection returned, Must be greater than 0
   */
  getPersons(
    parameters: {
      searchContext?: string
      searchText?: string
      byuIds?: Array<string>
      personIds?: Array<string>
      netIds?: Array<string>
      credentialsCredentialType?: string
      credentialsCredentialId?: string
      credentialsUserNames?: Array<string>
      emailAddressesEmailAddress?: string
      emailAliasesEmailAlias?: string
      phonesPhoneNumbers?: Array<string>
      surname?: string
      restOfName?: string
      preferredSurname?: string
      preferredFirstName?: string
      sex?: '?' | 'F' | 'M' | 'f' | 'm'
      deceased?: boolean
      vitalRecordMaritalStatus?: '?' | 'D' | 'M' | 'S' | 'W' | 'd' | 'm' | 's' | 'w'
      personalRecordReligionCode?: string
      personalRecordCitizenshipCountryCode?: string
      homeTown?: string
      homeStateCode?: string
      homeCountryCode?: string
      restricted?: boolean
      personalRecordVisaType?: string
      employeeSummaryEmployeeRole?: string
      studentSummaryStudentStatus?: string
      groupMembershipsGroupIds?: Array<string>
      groupsAdministeredGroupId?: string
      fieldSets?: Array<
        | 'basic'
        | 'addresses'
        | 'alias_domains'
        | 'credentials'
        | 'email_addresses'
        | 'email_aliases'
        | 'employee_summary'
        | 'family_phones'
        | 'vital_record'
        | 'group_memberships'
        | 'groups_administered'
        | 'id_card'
        | 'languages'
        | 'personal_record'
        | 'phones'
        | 'relationships'
        | 'student_summary'
      >
      contexts?: Array<'all' | 'contact' | 'emergency' | 'official' | 'person'>
      pageStart?: number
      pageSize?: number
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, persons>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      if (parameters['searchContext'] !== undefined) {
        queryParameters['search_context'] = parameters['searchContext']
      }

      if (parameters['searchText'] !== undefined) {
        queryParameters['search_text'] = parameters['searchText']
      }

      if (parameters['byuIds'] !== undefined) {
        queryParameters['byu_ids'] = parameters['byuIds']
      }

      if (parameters['personIds'] !== undefined) {
        queryParameters['person_ids'] = parameters['personIds']
      }

      if (parameters['netIds'] !== undefined) {
        queryParameters['net_ids'] = parameters['netIds']
      }

      if (parameters['credentialsCredentialType'] !== undefined) {
        queryParameters['credentials.credential_type'] = parameters['credentialsCredentialType']
      }

      if (parameters['credentialsCredentialId'] !== undefined) {
        queryParameters['credentials.credential_id'] = parameters['credentialsCredentialId']
      }

      if (parameters['credentialsUserNames'] !== undefined) {
        queryParameters['credentials.user_names'] = parameters['credentialsUserNames']
      }

      if (parameters['emailAddressesEmailAddress'] !== undefined) {
        queryParameters['email_addresses.email_address'] = parameters['emailAddressesEmailAddress']
      }

      if (parameters['emailAliasesEmailAlias'] !== undefined) {
        queryParameters['email_aliases.email_alias'] = parameters['emailAliasesEmailAlias']
      }

      if (parameters['phonesPhoneNumbers'] !== undefined) {
        queryParameters['phones.phone_numbers'] = parameters['phonesPhoneNumbers']
      }

      if (parameters['surname'] !== undefined) {
        queryParameters['surname'] = parameters['surname']
      }

      if (parameters['restOfName'] !== undefined) {
        queryParameters['rest_of_name'] = parameters['restOfName']
      }

      if (parameters['preferredSurname'] !== undefined) {
        queryParameters['preferred_surname'] = parameters['preferredSurname']
      }

      if (parameters['preferredFirstName'] !== undefined) {
        queryParameters['preferred_first_name'] = parameters['preferredFirstName']
      }

      if (parameters['sex'] !== undefined) {
        queryParameters['sex'] = parameters['sex']
      }

      if (parameters['deceased'] !== undefined) {
        queryParameters['deceased'] = parameters['deceased']
      }

      if (parameters['vitalRecordMaritalStatus'] !== undefined) {
        queryParameters['vital_record.marital_status'] = parameters['vitalRecordMaritalStatus']
      }

      if (parameters['personalRecordReligionCode'] !== undefined) {
        queryParameters['personal_record.religion_code'] = parameters['personalRecordReligionCode']
      }

      if (parameters['personalRecordCitizenshipCountryCode'] !== undefined) {
        queryParameters['personal_record.citizenship_country_code'] = parameters['personalRecordCitizenshipCountryCode']
      }

      if (parameters['homeTown'] !== undefined) {
        queryParameters['home_town'] = parameters['homeTown']
      }

      if (parameters['homeStateCode'] !== undefined) {
        queryParameters['home_state_code'] = parameters['homeStateCode']
      }

      if (parameters['homeCountryCode'] !== undefined) {
        queryParameters['home_country_code'] = parameters['homeCountryCode']
      }

      if (parameters['restricted'] !== undefined) {
        queryParameters['restricted'] = parameters['restricted']
      }

      if (parameters['personalRecordVisaType'] !== undefined) {
        queryParameters['personal_record.visa_type'] = parameters['personalRecordVisaType']
      }

      if (parameters['employeeSummaryEmployeeRole'] !== undefined) {
        queryParameters['employee_summary.employee_role'] = parameters['employeeSummaryEmployeeRole']
      }

      if (parameters['studentSummaryStudentStatus'] !== undefined) {
        queryParameters['student_summary.student_status'] = parameters['studentSummaryStudentStatus']
      }

      if (parameters['groupMembershipsGroupIds'] !== undefined) {
        queryParameters['group_memberships.group_ids'] = parameters['groupMembershipsGroupIds']
      }

      if (parameters['groupsAdministeredGroupId'] !== undefined) {
        queryParameters['groups_administered.group_id'] = parameters['groupsAdministeredGroupId']
      }

      if (parameters['fieldSets'] !== undefined) {
        queryParameters['field_sets'] = parameters['fieldSets']
      }

      if (parameters['contexts'] !== undefined) {
        queryParameters['contexts'] = parameters['contexts']
      }

      if (parameters['pageStart'] !== undefined) {
        queryParameters['page_start'] = parameters['pageStart']
      }

      if (parameters['pageSize'] !== undefined) {
        queryParameters['page_size'] = parameters['pageSize']
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  createPersonURL(
    parameters: {
      personPost: person_post
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    queryParameters = {}

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Creates a Person
   * @method
   * @name Test#createPerson
   * @param {} personPost - The address values to be set
   */
  createPerson(
    parameters: {
      personPost: person_post
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<201, basic>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<405, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    let form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      if (parameters['personPost'] !== undefined) {
        body = parameters['personPost']
      }

      if (parameters['personPost'] === undefined) {
        reject(new Error('Missing required  parameter: personPost'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      form = queryParameters
      queryParameters = {}

      this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getPersonURL(
    parameters: {
      byuId: string
      fieldSets?: Array<
        | 'basic'
        | 'addresses'
        | 'alias_domains'
        | 'credentials'
        | 'email_addresses'
        | 'email_aliases'
        | 'employee_summary'
        | 'family_phones'
        | 'vital_record'
        | 'group_memberships'
        | 'groups_administered'
        | 'id_card'
        | 'languages'
        | 'personal_record'
        | 'phones'
        | 'relationships'
        | 'student_summary'
      >
      contexts?: Array<'all' | 'contact' | 'emergency' | 'official' | 'marriott_school' | 'person'>
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)
    if (parameters['fieldSets'] !== undefined) {
      queryParameters['field_sets'] = parameters['fieldSets']
    }

    if (parameters['contexts'] !== undefined) {
      queryParameters['contexts'] = parameters['contexts']
    }

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the person with the specified BYU ID
   * @method
   * @name Test#getPerson
   * @param {string} byuId - The person's BYU ID
   * @param {array} fieldSets - indicates which field sets are to be returned
   * @param {array} contexts - indicates which contexts are to be returned
   */
  getPerson(
    parameters: {
      byuId: string
      fieldSets?: Array<
        | 'basic'
        | 'addresses'
        | 'alias_domains'
        | 'credentials'
        | 'email_addresses'
        | 'email_aliases'
        | 'employee_summary'
        | 'family_phones'
        | 'vital_record'
        | 'group_memberships'
        | 'groups_administered'
        | 'id_card'
        | 'languages'
        | 'personal_record'
        | 'phones'
        | 'relationships'
        | 'student_summary'
      >
      contexts?: Array<'all' | 'contact' | 'emergency' | 'official' | 'marriott_school' | 'person'>
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, person>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['fieldSets'] !== undefined) {
        queryParameters['field_sets'] = parameters['fieldSets']
      }

      if (parameters['contexts'] !== undefined) {
        queryParameters['contexts'] = parameters['contexts']
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyPersonURL(
    parameters: {
      byuId: string
      basicPut: basic_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies the Person with specified BYU ID
   * @method
   * @name Test#modifyPerson
   * @param {string} byuId - The person's BYU ID
   * @param {} basicPut - The person data to be updated
   */
  modifyPerson(
    parameters: {
      byuId: string
      basicPut: basic_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, basic>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['basicPut'] !== undefined) {
        body = parameters['basicPut']
      }

      if (parameters['basicPut'] === undefined) {
        reject(new Error('Missing required  parameter: basicPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deletePersonURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes the person with the specified BYU ID
   * @method
   * @name Test#deletePerson
   * @param {string} byuId - The person's BYU ID
   */
  deletePerson(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getAddressesURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns all addresses for the BYU ID
   * @method
   * @name Test#getAddresses
   * @param {string} byuId - The person's BYU ID
   */
  getAddresses(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, addresses>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getAddressURL(
    parameters: {
      byuId: string
      addressType: 'MAL' | 'PRM' | 'RES' | 'WRK'
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses/{address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{address_type}', `${encodeURIComponent(parameters['addressType'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the address for the specified BYU ID and address type
   * @method
   * @name Test#getAddress
   * @param {string} byuId - The person's BYU ID
   * @param {string} addressType - The type of address
   */
  getAddress(
    parameters: {
      byuId: string
      addressType: 'MAL' | 'PRM' | 'RES' | 'WRK'
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, address>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses/{address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{address_type}', `${encodeURIComponent(parameters['addressType'].toString())}`)

      if (parameters['addressType'] === undefined) {
        reject(new Error('Missing required  parameter: addressType'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyAddressURL(
    parameters: {
      byuId: string
      addressType: 'MAL' | 'PRM' | 'RES' | 'WRK'
      addressPut: address_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses/{address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{address_type}', `${encodeURIComponent(parameters['addressType'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies or creates an address for the specified BYU ID and address_type
   * @method
   * @name Test#modifyAddress
   * @param {string} byuId - The person's BYU ID
   * @param {string} addressType - The type of address
   * @param {} addressPut - The address values to be set
   */
  modifyAddress(
    parameters: {
      byuId: string
      addressType: 'MAL' | 'PRM' | 'RES' | 'WRK'
      addressPut: address_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, address>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses/{address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{address_type}', `${encodeURIComponent(parameters['addressType'].toString())}`)

      if (parameters['addressType'] === undefined) {
        reject(new Error('Missing required  parameter: addressType'))
        return
      }

      if (parameters['addressPut'] !== undefined) {
        body = parameters['addressPut']
      }

      if (parameters['addressPut'] === undefined) {
        reject(new Error('Missing required  parameter: addressPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteAddressURL(
    parameters: {
      byuId: string
      addressType: 'MAL' | 'PRM' | 'RES' | 'WRK'
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses/{address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{address_type}', `${encodeURIComponent(parameters['addressType'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes the address for the BYU ID/address_type
   * @method
   * @name Test#deleteAddress
   * @param {string} byuId - The person's BYU ID
   * @param {string} addressType - The type of address
   */
  deleteAddress(
    parameters: {
      byuId: string
      addressType: 'MAL' | 'PRM' | 'RES' | 'WRK'
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/addresses/{address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{address_type}', `${encodeURIComponent(parameters['addressType'].toString())}`)

      if (parameters['addressType'] === undefined) {
        reject(new Error('Missing required  parameter: addressType'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getAliasDomainsURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/alias_domains'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns all alias domains for the BYU ID
   * @method
   * @name Test#getAliasDomains
   * @param {string} byuId - The person's BYU ID
   */
  getAliasDomains(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, alias_domains>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/alias_domains'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getCredentialsURL(
    parameters: {
      byuId: string
      credentialType?: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)
    if (parameters['credentialType'] !== undefined) {
      queryParameters['credential_type'] = parameters['credentialType']
    }

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns all credentials for the BYU ID
   * @method
   * @name Test#getCredentials
   * @param {string} byuId - The person's BYU ID
   * @param {string} credentialType - One of the credential types available through the meta/credential_type service.
   */
  getCredentials(
    parameters: {
      byuId: string
      credentialType?: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, credentials>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['credentialType'] !== undefined) {
        queryParameters['credential_type'] = parameters['credentialType']
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getCredentialURL(
    parameters: {
      byuId: string
      credentialType: string
      credentialId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials/{credential_type},{credential_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{credential_type}', `${encodeURIComponent(parameters['credentialType'].toString())}`)

    path = path.replace('{credential_id}', `${encodeURIComponent(parameters['credentialId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the credential for the BYU ID/credential_type
   * @method
   * @name Test#getCredential
   * @param {string} byuId - The person's BYU ID
   * @param {string} credentialType - One of the credential types available through the meta/credential_type service.
   * @param {string} credentialId - One of the credential types available through the meta/credential_type service.
   */
  getCredential(
    parameters: {
      byuId: string
      credentialType: string
      credentialId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, credential>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials/{credential_type},{credential_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{credential_type}', `${encodeURIComponent(parameters['credentialType'].toString())}`)

      if (parameters['credentialType'] === undefined) {
        reject(new Error('Missing required  parameter: credentialType'))
        return
      }

      path = path.replace('{credential_id}', `${encodeURIComponent(parameters['credentialId'].toString())}`)

      if (parameters['credentialId'] === undefined) {
        reject(new Error('Missing required  parameter: credentialId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyCredentialURL(
    parameters: {
      byuId: string
      credentialType: string
      credentialId: string
      credentialPut: credential_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials/{credential_type},{credential_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{credential_type}', `${encodeURIComponent(parameters['credentialType'].toString())}`)

    path = path.replace('{credential_id}', `${encodeURIComponent(parameters['credentialId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies or creates a credential
   * @method
   * @name Test#modifyCredential
   * @param {string} byuId - The person's BYU ID
   * @param {string} credentialType - One of the credential types available through the meta/credential_type service.
   * @param {string} credentialId - One of the credential types available through the meta/credential_type service.
   * @param {} credentialPut - The attributes of the credential to be created or updated
   */
  modifyCredential(
    parameters: {
      byuId: string
      credentialType: string
      credentialId: string
      credentialPut: credential_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, credential>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials/{credential_type},{credential_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{credential_type}', `${encodeURIComponent(parameters['credentialType'].toString())}`)

      if (parameters['credentialType'] === undefined) {
        reject(new Error('Missing required  parameter: credentialType'))
        return
      }

      path = path.replace('{credential_id}', `${encodeURIComponent(parameters['credentialId'].toString())}`)

      if (parameters['credentialId'] === undefined) {
        reject(new Error('Missing required  parameter: credentialId'))
        return
      }

      if (parameters['credentialPut'] !== undefined) {
        body = parameters['credentialPut']
      }

      if (parameters['credentialPut'] === undefined) {
        reject(new Error('Missing required  parameter: credentialPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteCredentialURL(
    parameters: {
      byuId: string
      credentialType: string
      credentialId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials/{credential_type},{credential_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{credential_type}', `${encodeURIComponent(parameters['credentialType'].toString())}`)

    path = path.replace('{credential_id}', `${encodeURIComponent(parameters['credentialId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes a credential
   * @method
   * @name Test#deleteCredential
   * @param {string} byuId - The person's BYU ID
   * @param {string} credentialType - One of the credential types available through the meta/credential_type service.
   * @param {string} credentialId - One of the credential types available through the meta/credential_type service.
   */
  deleteCredential(
    parameters: {
      byuId: string
      credentialType: string
      credentialId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/credentials/{credential_type},{credential_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{credential_type}', `${encodeURIComponent(parameters['credentialType'].toString())}`)

      if (parameters['credentialType'] === undefined) {
        reject(new Error('Missing required  parameter: credentialType'))
        return
      }

      path = path.replace('{credential_id}', `${encodeURIComponent(parameters['credentialId'].toString())}`)

      if (parameters['credentialId'] === undefined) {
        reject(new Error('Missing required  parameter: credentialId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getEmailAddressesURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns all email addresses for the BYU ID
   * @method
   * @name Test#getEmailAddresses
   * @param {string} byuId - The person's BYU ID
   */
  getEmailAddresses(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, email_addresses>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getEmailAddressURL(
    parameters: {
      byuId: string
      emailAddressType: 'PERSONAL' | 'WORK' | 'SECURITY'
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses/{email_address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{email_address_type}', `${encodeURIComponent(parameters['emailAddressType'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the email address for the BYU ID/email_address_type
   * @method
   * @name Test#getEmailAddress
   * @param {string} byuId - The person's BYU ID
   * @param {string} emailAddressType - The type of email address
   */
  getEmailAddress(
    parameters: {
      byuId: string
      emailAddressType: 'PERSONAL' | 'WORK' | 'SECURITY'
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, email_address>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses/{email_address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{email_address_type}', `${encodeURIComponent(parameters['emailAddressType'].toString())}`)

      if (parameters['emailAddressType'] === undefined) {
        reject(new Error('Missing required  parameter: emailAddressType'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyEmailAddressURL(
    parameters: {
      byuId: string
      emailAddressType: 'PERSONAL' | 'WORK' | 'SECURITY'
      emailPut: email_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses/{email_address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{email_address_type}', `${encodeURIComponent(parameters['emailAddressType'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies or creates an email address for the BYU ID/email_address_type
   * @method
   * @name Test#modifyEmailAddress
   * @param {string} byuId - The person's BYU ID
   * @param {string} emailAddressType - The type of email address
   * @param {} emailPut - The email address values to be set
   */
  modifyEmailAddress(
    parameters: {
      byuId: string
      emailAddressType: 'PERSONAL' | 'WORK' | 'SECURITY'
      emailPut: email_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, email_address>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses/{email_address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{email_address_type}', `${encodeURIComponent(parameters['emailAddressType'].toString())}`)

      if (parameters['emailAddressType'] === undefined) {
        reject(new Error('Missing required  parameter: emailAddressType'))
        return
      }

      if (parameters['emailPut'] !== undefined) {
        body = parameters['emailPut']
      }

      if (parameters['emailPut'] === undefined) {
        reject(new Error('Missing required  parameter: emailPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteEmailAddressURL(
    parameters: {
      byuId: string
      emailAddressType: 'PERSONAL' | 'WORK' | 'SECURITY'
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses/{email_address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{email_address_type}', `${encodeURIComponent(parameters['emailAddressType'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes the email address for the BYU ID/email_address_type
   * @method
   * @name Test#deleteEmailAddress
   * @param {string} byuId - The person's BYU ID
   * @param {string} emailAddressType - The type of email address
   */
  deleteEmailAddress(
    parameters: {
      byuId: string
      emailAddressType: 'PERSONAL' | 'WORK' | 'SECURITY'
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_addresses/{email_address_type}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{email_address_type}', `${encodeURIComponent(parameters['emailAddressType'].toString())}`)

      if (parameters['emailAddressType'] === undefined) {
        reject(new Error('Missing required  parameter: emailAddressType'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getEmailAliasesURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns all email addresses for the BYU ID
   * @method
   * @name Test#getEmailAliases
   * @param {string} byuId - The person's BYU ID
   */
  getEmailAliases(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, email_aliases>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getEmailAliasURL(
    parameters: {
      byuId: string
      emailAlias: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases/{email_alias}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{email_alias}', `${encodeURIComponent(parameters['emailAlias'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the email address for the BYU ID/email_address_type
   * @method
   * @name Test#getEmailAlias
   * @param {string} byuId - The person's BYU ID
   * @param {string} emailAlias - The email alias
   */
  getEmailAlias(
    parameters: {
      byuId: string
      emailAlias: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, email_alias>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases/{email_alias}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{email_alias}', `${encodeURIComponent(parameters['emailAlias'].toString())}`)

      if (parameters['emailAlias'] === undefined) {
        reject(new Error('Missing required  parameter: emailAlias'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyEmailAliasURL(
    parameters: {
      byuId: string
      emailAlias: string
      emailAliasPut: email_alias_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases/{email_alias}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{email_alias}', `${encodeURIComponent(parameters['emailAlias'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies or creates an email alias for the BYU ID
   * @method
   * @name Test#modifyEmailAlias
   * @param {string} byuId - The person's BYU ID
   * @param {string} emailAlias - The email alias
   * @param {} emailAliasPut - The email address values to be set
   */
  modifyEmailAlias(
    parameters: {
      byuId: string
      emailAlias: string
      emailAliasPut: email_alias_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, email_alias>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases/{email_alias}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{email_alias}', `${encodeURIComponent(parameters['emailAlias'].toString())}`)

      if (parameters['emailAlias'] === undefined) {
        reject(new Error('Missing required  parameter: emailAlias'))
        return
      }

      if (parameters['emailAliasPut'] !== undefined) {
        body = parameters['emailAliasPut']
      }

      if (parameters['emailAliasPut'] === undefined) {
        reject(new Error('Missing required  parameter: emailAliasPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteEmailAliasURL(
    parameters: {
      byuId: string
      emailAlias: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases/{email_alias}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{email_alias}', `${encodeURIComponent(parameters['emailAlias'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes the email address for the BYU ID/email_address_type
   * @method
   * @name Test#deleteEmailAlias
   * @param {string} byuId - The person's BYU ID
   * @param {string} emailAlias - The email alias
   */
  deleteEmailAlias(
    parameters: {
      byuId: string
      emailAlias: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/email_aliases/{email_alias}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{email_alias}', `${encodeURIComponent(parameters['emailAlias'].toString())}`)

      if (parameters['emailAlias'] === undefined) {
        reject(new Error('Missing required  parameter: emailAlias'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getEmployeeSummaryURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/employee_summary'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns employee summary data for a person
   * @method
   * @name Test#getEmployeeSummary
   * @param {string} byuId - The person's BYU ID
   */
  getEmployeeSummary(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, employee_summary>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/employee_summary'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getFamilyPhonesURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the person's family phones
   * @method
   * @name Test#getFamilyPhones
   * @param {string} byuId - The person's BYU ID
   */
  getFamilyPhones(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, family_phones>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getFamilyPhoneURL(
    parameters: {
      byuId: string
      phoneType: 'EMR' | 'PRM'
      lookupNumber: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones/{phone_type},{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{phone_type}', `${encodeURIComponent(parameters['phoneType'].toString())}`)

    path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns information on a specified family phone
   * @method
   * @name Test#getFamilyPhone
   * @param {string} byuId - The person's BYU ID
   * @param {string} phoneType - The phone type
   * @param {string} lookupNumber - The family member's phone number
   */
  getFamilyPhone(
    parameters: {
      byuId: string
      phoneType: 'EMR' | 'PRM'
      lookupNumber: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, family_phone>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones/{phone_type},{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{phone_type}', `${encodeURIComponent(parameters['phoneType'].toString())}`)

      if (parameters['phoneType'] === undefined) {
        reject(new Error('Missing required  parameter: phoneType'))
        return
      }

      path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

      if (parameters['lookupNumber'] === undefined) {
        reject(new Error('Missing required  parameter: lookupNumber'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyFamilyPhoneURL(
    parameters: {
      byuId: string
      phoneType: 'EMR' | 'PRM'
      lookupNumber: string
      familyPhonePut: family_phone_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones/{phone_type},{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{phone_type}', `${encodeURIComponent(parameters['phoneType'].toString())}`)

    path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies or creates a family phone
   * @method
   * @name Test#modifyFamilyPhone
   * @param {string} byuId - The person's BYU ID
   * @param {string} phoneType - The phone type
   * @param {string} lookupNumber - The person's phone number, numbers only
   * @param {} familyPhonePut - The attributes associated with the family phone
   */
  modifyFamilyPhone(
    parameters: {
      byuId: string
      phoneType: 'EMR' | 'PRM'
      lookupNumber: string
      familyPhonePut: family_phone_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, family_phone>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones/{phone_type},{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{phone_type}', `${encodeURIComponent(parameters['phoneType'].toString())}`)

      if (parameters['phoneType'] === undefined) {
        reject(new Error('Missing required  parameter: phoneType'))
        return
      }

      path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

      if (parameters['lookupNumber'] === undefined) {
        reject(new Error('Missing required  parameter: lookupNumber'))
        return
      }

      if (parameters['familyPhonePut'] !== undefined) {
        body = parameters['familyPhonePut']
      }

      if (parameters['familyPhonePut'] === undefined) {
        reject(new Error('Missing required  parameter: familyPhonePut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteFamilyPhoneURL(
    parameters: {
      byuId: string
      phoneType: 'EMR' | 'PRM'
      lookupNumber: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones/{phone_type},{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{phone_type}', `${encodeURIComponent(parameters['phoneType'].toString())}`)

    path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes a specified family phone
   * @method
   * @name Test#deleteFamilyPhone
   * @param {string} byuId - The person's BYU ID
   * @param {string} phoneType - The phone type
   * @param {string} lookupNumber - The person's phone number, numbers only
   */
  deleteFamilyPhone(
    parameters: {
      byuId: string
      phoneType: 'EMR' | 'PRM'
      lookupNumber: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/family_phones/{phone_type},{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{phone_type}', `${encodeURIComponent(parameters['phoneType'].toString())}`)

      if (parameters['phoneType'] === undefined) {
        reject(new Error('Missing required  parameter: phoneType'))
        return
      }

      path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

      if (parameters['lookupNumber'] === undefined) {
        reject(new Error('Missing required  parameter: lookupNumber'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getGroupMembershipsURL(
    parameters: {
      byuId: string
      groupIds?: Array<string>
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)
    if (parameters['groupIds'] !== undefined) {
      queryParameters['group_ids'] = parameters['groupIds']
    }

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the group memberships for the BYU ID
   * @method
   * @name Test#getGroupMemberships
   * @param {string} byuId - The person's BYU ID
   * @param {array} groupIds - The Group ID
   */
  getGroupMemberships(
    parameters: {
      byuId: string
      groupIds?: Array<string>
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, group_memberships>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['groupIds'] !== undefined) {
        queryParameters['group_ids'] = parameters['groupIds']
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getGroupMembershipURL(
    parameters: {
      byuId: string
      groupId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns group membership information for the BYU ID/group
   * @method
   * @name Test#getGroupMembership
   * @param {string} byuId - The person's BYU ID
   * @param {string} groupId - The Group ID
   */
  getGroupMembership(
    parameters: {
      byuId: string
      groupId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, group_membership>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

      if (parameters['groupId'] === undefined) {
        reject(new Error('Missing required  parameter: groupId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyGroupMembershipURL(
    parameters: {
      byuId: string
      groupId: string
      groupMembershipPut?: {
        expiration_date?: string
      } & {
        [key: string]: any
      }
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies or creates an group_membership for the specified BYU ID and group_id
   * @method
   * @name Test#modifyGroupMembership
   * @param {string} byuId - The person's BYU ID
   * @param {string} groupId - The Group ID
   * @param {} groupMembershipPut - Persons Resource of the University API
   */
  modifyGroupMembership(
    parameters: {
      byuId: string
      groupId: string
      groupMembershipPut?: {
        expiration_date?: string
      } & {
        [key: string]: any
      }
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, group_membership>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

      if (parameters['groupId'] === undefined) {
        reject(new Error('Missing required  parameter: groupId'))
        return
      }

      if (parameters['groupMembershipPut'] !== undefined) {
        body = parameters['groupMembershipPut']
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteGroupMembershipURL(
    parameters: {
      byuId: string
      groupId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes the group_membership for the BYU ID/group_id
   * @method
   * @name Test#deleteGroupMembership
   * @param {string} byuId - The person's BYU ID
   * @param {string} groupId - The Group ID
   */
  deleteGroupMembership(
    parameters: {
      byuId: string
      groupId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/group_memberships/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

      if (parameters['groupId'] === undefined) {
        reject(new Error('Missing required  parameter: groupId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getGroupsAdministeredURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/groups_administered'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns groups administered by a person
   * @method
   * @name Test#getGroupsAdministered
   * @param {string} byuId - The person's BYU ID
   */
  getGroupsAdministered(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, groups_administered>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/groups_administered'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getGroupAdministeredURL(
    parameters: {
      byuId: string
      groupId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/groups_administered/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns group administration information for the BYU ID/group
   * @method
   * @name Test#getGroupAdministered
   * @param {string} byuId - The person's BYU ID
   * @param {string} groupId - The Group ID
   */
  getGroupAdministered(
    parameters: {
      byuId: string
      groupId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, group_administered>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/groups_administered/{group_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{group_id}', `${encodeURIComponent(parameters['groupId'].toString())}`)

      if (parameters['groupId'] === undefined) {
        reject(new Error('Missing required  parameter: groupId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getIdCardURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/id_card'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns a person's ID card information
   * @method
   * @name Test#getIdCard
   * @param {string} byuId - The person's BYU ID
   */
  getIdCard(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, id_card>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/id_card'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyIdCardURL(
    parameters: {
      byuId: string
      idCardPut: id_card_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/id_card'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies a person's ID card information
   * @method
   * @name Test#modifyIdCard
   * @param {string} byuId - The person's BYU ID
   * @param {} idCardPut - The ID card info being changed
   */
  modifyIdCard(
    parameters: {
      byuId: string
      idCardPut: id_card_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, id_card>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/id_card'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['idCardPut'] !== undefined) {
        body = parameters['idCardPut']
      }

      if (parameters['idCardPut'] === undefined) {
        reject(new Error('Missing required  parameter: idCardPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getLanguagesURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the languages for a person
   * @method
   * @name Test#getLanguages
   * @param {string} byuId - The person's BYU ID
   */
  getLanguages(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, languages>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getLanguageURL(
    parameters: {
      byuId: string
      languageCode: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages/{language_code}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{language_code}', `${encodeURIComponent(parameters['languageCode'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns a person's abilities for a specific language
   * @method
   * @name Test#getLanguage
   * @param {string} byuId - The person's BYU ID
   * @param {string} languageCode - One of the language codes available through the meta/language service
   */
  getLanguage(
    parameters: {
      byuId: string
      languageCode: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, language>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages/{language_code}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{language_code}', `${encodeURIComponent(parameters['languageCode'].toString())}`)

      if (parameters['languageCode'] === undefined) {
        reject(new Error('Missing required  parameter: languageCode'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyLanguageURL(
    parameters: {
      byuId: string
      languageCode: string
      languagePut: language_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages/{language_code}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{language_code}', `${encodeURIComponent(parameters['languageCode'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies a person's abilities for a specific language
   * @method
   * @name Test#modifyLanguage
   * @param {string} byuId - The person's BYU ID
   * @param {string} languageCode - One of the language codes available through the meta/language service
   * @param {} languagePut - The language parameters to be created
   */
  modifyLanguage(
    parameters: {
      byuId: string
      languageCode: string
      languagePut: language_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, language>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages/{language_code}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{language_code}', `${encodeURIComponent(parameters['languageCode'].toString())}`)

      if (parameters['languageCode'] === undefined) {
        reject(new Error('Missing required  parameter: languageCode'))
        return
      }

      if (parameters['languagePut'] !== undefined) {
        body = parameters['languagePut']
      }

      if (parameters['languagePut'] === undefined) {
        reject(new Error('Missing required  parameter: languagePut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteLanguageURL(
    parameters: {
      byuId: string
      languageCode: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages/{language_code}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{language_code}', `${encodeURIComponent(parameters['languageCode'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes a person's language abilities for a specific language
   * @method
   * @name Test#deleteLanguage
   * @param {string} byuId - The person's BYU ID
   * @param {string} languageCode - One of the language codes available through the meta/language service
   */
  deleteLanguage(
    parameters: {
      byuId: string
      languageCode: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/languages/{language_code}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{language_code}', `${encodeURIComponent(parameters['languageCode'].toString())}`)

      if (parameters['languageCode'] === undefined) {
        reject(new Error('Missing required  parameter: languageCode'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getPersonalRecordURL(
    parameters: {
      byuId: string
      refreshFromChurch?: boolean
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/personal_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)
    if (parameters['refreshFromChurch'] !== undefined) {
      queryParameters['refresh_from_church'] = parameters['refreshFromChurch']
    }

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the person with the specified BYU ID
   * @method
   * @name Test#getPersonalRecord
   * @param {string} byuId - The person's BYU ID
   * @param {boolean} refreshFromChurch - The person's BYU ID
   */
  getPersonalRecord(
    parameters: {
      byuId: string
      refreshFromChurch?: boolean
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, personal_record>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/personal_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['refreshFromChurch'] !== undefined) {
        queryParameters['refresh_from_church'] = parameters['refreshFromChurch']
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyPersonalRecordURL(
    parameters: {
      byuId: string
      personalRecordPut: personal_record_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/personal_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies the Person with specified BYU ID
   * @method
   * @name Test#modifyPersonalRecord
   * @param {string} byuId - The person's BYU ID
   * @param {} personalRecordPut - The person data to be updated
   */
  modifyPersonalRecord(
    parameters: {
      byuId: string
      personalRecordPut: personal_record_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, personal_record>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/personal_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['personalRecordPut'] !== undefined) {
        body = parameters['personalRecordPut']
      }

      if (parameters['personalRecordPut'] === undefined) {
        reject(new Error('Missing required  parameter: personalRecordPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getPhonesURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns a person's phones
   * @method
   * @name Test#getPhones
   * @param {string} byuId - The person's BYU ID
   */
  getPhones(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, phones>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getPhoneURL(
    parameters: {
      byuId: string
      lookupNumber: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones/{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns phone information for a specific person/phone number
   * @method
   * @name Test#getPhone
   * @param {string} byuId - The person's BYU ID
   * @param {string} lookupNumber - The person's phone number, numbers only
   */
  getPhone(
    parameters: {
      byuId: string
      lookupNumber: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, phone>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones/{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

      if (parameters['lookupNumber'] === undefined) {
        reject(new Error('Missing required  parameter: lookupNumber'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyPhoneURL(
    parameters: {
      byuId: string
      lookupNumber: string
      phonePut: phone_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones/{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Sets phone information for a specific person/phone number
   * @method
   * @name Test#modifyPhone
   * @param {string} byuId - The person's BYU ID
   * @param {string} lookupNumber - The person's phone number, numbers only
   * @param {} phonePut - The phone information to be updated or created
   */
  modifyPhone(
    parameters: {
      byuId: string
      lookupNumber: string
      phonePut: phone_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, phone>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones/{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

      if (parameters['lookupNumber'] === undefined) {
        reject(new Error('Missing required  parameter: lookupNumber'))
        return
      }

      if (parameters['phonePut'] !== undefined) {
        body = parameters['phonePut']
      }

      if (parameters['phonePut'] === undefined) {
        reject(new Error('Missing required  parameter: phonePut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deletePhoneURL(
    parameters: {
      byuId: string
      lookupNumber: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones/{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes one of a person's phones
   * @method
   * @name Test#deletePhone
   * @param {string} byuId - The person's BYU ID
   * @param {string} lookupNumber - The person's phone number, numbers only
   */
  deletePhone(
    parameters: {
      byuId: string
      lookupNumber: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/phones/{lookup_number}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{lookup_number}', `${encodeURIComponent(parameters['lookupNumber'].toString())}`)

      if (parameters['lookupNumber'] === undefined) {
        reject(new Error('Missing required  parameter: lookupNumber'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getRelationshipsURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns a person's relationships
   * @method
   * @name Test#getRelationships
   * @param {string} byuId - The person's BYU ID
   */
  getRelationships(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, relationships>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getRelationshipURL(
    parameters: {
      byuId: string
      relatedByuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships/{related_byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{related_byu_id}', `${encodeURIComponent(parameters['relatedByuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns information on a specific relationship between two identities
   * @method
   * @name Test#getRelationship
   * @param {string} byuId - The person's BYU ID
   * @param {string} relatedByuId - The related person's BYU ID
   */
  getRelationship(
    parameters: {
      byuId: string
      relatedByuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, relationship>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships/{related_byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{related_byu_id}', `${encodeURIComponent(parameters['relatedByuId'].toString())}`)

      if (parameters['relatedByuId'] === undefined) {
        reject(new Error('Missing required  parameter: relatedByuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyRelationshipURL(
    parameters: {
      byuId: string
      relatedByuId: string
      relationshipPut: relationship_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships/{related_byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{related_byu_id}', `${encodeURIComponent(parameters['relatedByuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies or creates a relationship between two persons
   * @method
   * @name Test#modifyRelationship
   * @param {string} byuId - The person's BYU ID
   * @param {string} relatedByuId - The related person's BYU ID
   * @param {} relationshipPut - The relationship information to be set
   */
  modifyRelationship(
    parameters: {
      byuId: string
      relatedByuId: string
      relationshipPut: relationship_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, relationship>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships/{related_byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{related_byu_id}', `${encodeURIComponent(parameters['relatedByuId'].toString())}`)

      if (parameters['relatedByuId'] === undefined) {
        reject(new Error('Missing required  parameter: relatedByuId'))
        return
      }

      if (parameters['relationshipPut'] !== undefined) {
        body = parameters['relationshipPut']
      }

      if (parameters['relationshipPut'] === undefined) {
        reject(new Error('Missing required  parameter: relationshipPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  deleteRelationshipURL(
    parameters: {
      byuId: string
      relatedByuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships/{related_byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    path = path.replace('{related_byu_id}', `${encodeURIComponent(parameters['relatedByuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Deletes a relationship
   * @method
   * @name Test#deleteRelationship
   * @param {string} byuId - The person's BYU ID
   * @param {string} relatedByuId - The related person's BYU ID
   */
  deleteRelationship(
    parameters: {
      byuId: string
      relatedByuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<204, void>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/relationships/{related_byu_id}'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      path = path.replace('{related_byu_id}', `${encodeURIComponent(parameters['relatedByuId'].toString())}`)

      if (parameters['relatedByuId'] === undefined) {
        reject(new Error('Missing required  parameter: relatedByuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getStudentSummaryURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/student_summary'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns a summary of a person's academic information
   * @method
   * @name Test#getStudentSummary
   * @param {string} byuId - The person's BYU ID
   */
  getStudentSummary(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, student_summary>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/student_summary'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  getVitalRecordURL(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/vital_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Returns the person with the specified BYU ID
   * @method
   * @name Test#getVitalRecord
   * @param {string} byuId - The person's BYU ID
   */
  getVitalRecord(
    parameters: {
      byuId: string
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, vital_record>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/vital_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }

  modifyVitalRecordURL(
    parameters: {
      byuId: string
      vitalRecordPut: vital_record_put
    } & CommonRequestOptions
  ): string {
    let queryParameters: QueryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/vital_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

    if (parameters.$queryParameters) {
      queryParameters = {
        ...queryParameters,
        ...parameters.$queryParameters
      }
    }

    const keys = Object.keys(queryParameters)
    return (
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '')
    )
  }

  /**
   * Modifies the Person with specified BYU ID
   * @method
   * @name Test#modifyVitalRecord
   * @param {string} byuId - The person's BYU ID
   * @param {} vitalRecordPut - The person data to be updated
   */
  modifyVitalRecord(
    parameters: {
      byuId: string
      vitalRecordPut: vital_record_put
    } & CommonRequestOptions
  ): Promise<
    | ResponseWithBody<200, vital_record>
    | ResponseWithBody<400, error_response>
    | ResponseWithBody<401, error_response>
    | ResponseWithBody<403, error_response>
    | ResponseWithBody<404, error_response>
    | ResponseWithBody<409, error_response>
    | ResponseWithBody<500, error_response>
    | ResponseWithBody<503, error_response>
    | ResponseWithBody<504, error_response>
    | ResponseWithBody<number, error_response>
  > {
    const domain = parameters.$domain ? parameters.$domain : this.domain
    let path = '/{byu_id}/vital_record'
    if (parameters.$path) {
      path = typeof parameters.$path === 'function' ? parameters.$path(path) : parameters.$path
    }

    let body: any
    let queryParameters: QueryParameters = {}
    const headers: RequestHeaders = {}
    const form: any = {}
    return new Promise((resolve, reject) => {
      headers['Accept'] = 'application/json'
      headers['Content-Type'] = 'application/json'

      path = path.replace('{byu_id}', `${encodeURIComponent(parameters['byuId'].toString())}`)

      if (parameters['byuId'] === undefined) {
        reject(new Error('Missing required  parameter: byuId'))
        return
      }

      if (parameters['vitalRecordPut'] !== undefined) {
        body = parameters['vitalRecordPut']
      }

      if (parameters['vitalRecordPut'] === undefined) {
        reject(new Error('Missing required  parameter: vitalRecordPut'))
        return
      }

      if (parameters.$queryParameters) {
        queryParameters = {
          ...queryParameters,
          ...parameters.$queryParameters
        }
      }

      this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve, parameters)
    })
  }
}

export default Test
