'use strict';
const mappings = [
  {
    _type: 'template',
    _name: 'filebeat',
    _json: {
      "mappings": {
        "_default_": {
          "_all": {
            "norms": false
          },
          "_meta": {
            "version": "5.5.3"
          },
          "date_detection": false,
          "dynamic_templates": [
            {
              "strings_as_keyword": {
                "mapping": {
                  "ignore_above": 1024,
                  "type": "keyword"
                },
                "match_mapping_type": "string"
              }
            }
          ],
          "properties": {
            "@timestamp": {
              "type": "date"
            },
            "apache2": {
              "properties": {
                "access": {
                  "properties": {
                    "agent": {
                      "norms": false,
                      "type": "text"
                    },
                    "body_sent": {
                      "properties": {
                        "bytes": {
                          "type": "long"
                        }
                      }
                    },
                    "geoip": {
                      "properties": {
                        "continent_name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "country_iso_code": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "location": {
                          "type": "geo_point"
                        }
                      }
                    },
                    "http_version": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "method": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "referrer": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "remote_ip": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "response_code": {
                      "type": "long"
                    },
                    "url": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "user_agent": {
                      "properties": {
                        "device": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "major": {
                          "type": "long"
                        },
                        "minor": {
                          "type": "long"
                        },
                        "name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "os": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "os_major": {
                          "type": "long"
                        },
                        "os_minor": {
                          "type": "long"
                        },
                        "os_name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "patch": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        }
                      }
                    },
                    "user_name": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    }
                  }
                },
                "error": {
                  "properties": {
                    "client": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "level": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "message": {
                      "norms": false,
                      "type": "text"
                    },
                    "module": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "pid": {
                      "type": "long"
                    },
                    "tid": {
                      "type": "long"
                    }
                  }
                }
              }
            },
            "auditd": {
              "properties": {
                "log": {
                  "properties": {
                    "a0": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "acct": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "geoip": {
                      "properties": {
                        "city_name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "continent_name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "country_iso_code": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "location": {
                          "type": "geo_point"
                        },
                        "region_name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        }
                      }
                    },
                    "item": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "items": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "new_auid": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "new_ses": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "old_auid": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "old_ses": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "pid": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "ppid": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "record_type": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "res": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "sequence": {
                      "type": "long"
                    }
                  }
                }
              }
            },
            "beat": {
              "properties": {
                "hostname": {
                  "ignore_above": 1024,
                  "type": "keyword"
                },
                "name": {
                  "ignore_above": 1024,
                  "type": "keyword"
                },
                "version": {
                  "ignore_above": 1024,
                  "type": "keyword"
                }
              }
            },
            "error": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "fileset": {
              "properties": {
                "module": {
                  "ignore_above": 1024,
                  "type": "keyword"
                },
                "name": {
                  "ignore_above": 1024,
                  "type": "keyword"
                }
              }
            },
            "input_type": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "message": {
              "norms": false,
              "type": "text"
            },
            "meta": {
              "properties": {
                "cloud": {
                  "properties": {
                    "availability_zone": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "instance_id": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "machine_type": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "project_id": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "provider": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "region": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    }
                  }
                }
              }
            },
            "mysql": {
              "properties": {
                "error": {
                  "properties": {
                    "level": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "message": {
                      "norms": false,
                      "type": "text"
                    },
                    "thread_id": {
                      "type": "long"
                    },
                    "timestamp": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    }
                  }
                },
                "slowlog": {
                  "properties": {
                    "host": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "id": {
                      "type": "long"
                    },
                    "ip": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "lock_time": {
                      "properties": {
                        "sec": {
                          "type": "float"
                        }
                      }
                    },
                    "query": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "query_time": {
                      "properties": {
                        "sec": {
                          "type": "float"
                        }
                      }
                    },
                    "rows_examined": {
                      "type": "long"
                    },
                    "rows_sent": {
                      "type": "long"
                    },
                    "timestamp": {
                      "type": "long"
                    },
                    "user": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    }
                  }
                }
              }
            },
            "nginx": {
              "properties": {
                "access": {
                  "properties": {
                    "agent": {
                      "norms": false,
                      "type": "text"
                    },
                    "body_sent": {
                      "properties": {
                        "bytes": {
                          "type": "long"
                        }
                      }
                    },
                    "geoip": {
                      "properties": {
                        "continent_name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "country_iso_code": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "location": {
                          "type": "geo_point"
                        }
                      }
                    },
                    "http_version": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "method": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "referrer": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "remote_ip": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "response_code": {
                      "type": "long"
                    },
                    "url": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "user_agent": {
                      "properties": {
                        "device": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "major": {
                          "type": "long"
                        },
                        "minor": {
                          "type": "long"
                        },
                        "name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "os": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "os_major": {
                          "type": "long"
                        },
                        "os_minor": {
                          "type": "long"
                        },
                        "os_name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "patch": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        }
                      }
                    },
                    "user_name": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    }
                  }
                },
                "error": {
                  "properties": {
                    "connection_id": {
                      "type": "long"
                    },
                    "level": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "message": {
                      "norms": false,
                      "type": "text"
                    },
                    "pid": {
                      "type": "long"
                    },
                    "tid": {
                      "type": "long"
                    }
                  }
                }
              }
            },
            "offset": {
              "type": "long"
            },
            "read_timestamp": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "source": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "system": {
              "properties": {
                "auth": {
                  "properties": {
                    "groupadd": {
                      "properties": {
                        "gid": {
                          "type": "long"
                        },
                        "name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        }
                      }
                    },
                    "hostname": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "message": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "pid": {
                      "type": "long"
                    },
                    "program": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "ssh": {
                      "properties": {
                        "dropped_ip": {
                          "type": "ip"
                        },
                        "event": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "geoip": {
                          "properties": {
                            "city_name": {
                              "ignore_above": 1024,
                              "type": "keyword"
                            },
                            "continent_name": {
                              "ignore_above": 1024,
                              "type": "keyword"
                            },
                            "country_iso_code": {
                              "ignore_above": 1024,
                              "type": "keyword"
                            },
                            "location": {
                              "type": "geo_point"
                            },
                            "region_name": {
                              "ignore_above": 1024,
                              "type": "keyword"
                            }
                          }
                        },
                        "ip": {
                          "type": "ip"
                        },
                        "method": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "port": {
                          "type": "long"
                        },
                        "signature": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        }
                      }
                    },
                    "sudo": {
                      "properties": {
                        "command": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "error": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "pwd": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "tty": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "user": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        }
                      }
                    },
                    "timestamp": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "user": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "useradd": {
                      "properties": {
                        "gid": {
                          "type": "long"
                        },
                        "home": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "name": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "shell": {
                          "ignore_above": 1024,
                          "type": "keyword"
                        },
                        "uid": {
                          "type": "long"
                        }
                      }
                    }
                  }
                },
                "syslog": {
                  "properties": {
                    "hostname": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "message": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "pid": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "program": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    },
                    "timestamp": {
                      "ignore_above": 1024,
                      "type": "keyword"
                    }
                  }
                }
              }
            },
            "tags": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "type": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "bytes": {
              "type": "long"
            },
            "geoip": {
              "properties": {
                "continent_name": {
                  "ignore_above": 1024,
                  "type": "keyword"
                },
                "country_iso_code": {
                  "ignore_above": 1024,
                  "type": "keyword"
                },
                "location": {
                  "type": "geo_point"
                }
              }
            },
            "user_agent": {
            "properties": {
              "device": {
                "ignore_above": 1024,
                "type": "keyword"
              },
              "major": {
                "type": "long"
              },
              "minor": {
                "type": "long"
              },
              "name": {
                "ignore_above": 1024,
                "type": "keyword"
              },
              "os": {
                "ignore_above": 1024,
                "type": "keyword"
              },
              "os_major": {
                "type": "long"
              },
              "os_minor": {
                "type": "long"
              },
              "os_name": {
                "ignore_above": 1024,
                "type": "keyword"
              },
              "patch": {
                "ignore_above": 1024,
                "type": "keyword"
              }
            }
          }
          }
        }
      },
      "order": 0,
      "settings": {
        "index.mapping.total_fields.limit": 10000,
        "index.refresh_interval": "5s"
      },
      "template": "filebeat-*"
    },
  },
];

module.exports = mappings;
