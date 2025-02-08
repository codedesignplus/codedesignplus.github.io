// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMermaid from 'remark-mermaidjs'
import remarkGitHubCode from './src/plugins/remark-github-code.js';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import starlightImageZoom from 'starlight-image-zoom'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.codedesignplus.com',
    vite: {
        plugins: [
            // @ts-ignore
            tailwindcss()
        ]
    },
    markdown: {
        remarkPlugins: [
            remarkMermaid,
            remarkGitHubCode
        ]
    },
    integrations: [
        starlight({
            title: 'CodeDesignPlus',
            description: 'Documentación oficial de CodeDesignPlus. Encuentra guías, tutoriales y referencias para desarrollar microservicios robustos y escalables utilizando las herramientas y librerías de CodeDesignPlus.',
            logo: {
                src: './src/assets/logo-gray.svg'
            },
            customCss: [
                './src/styles/custom.css',
            ],
            disable404Route: true,
          
            social: {
                github: 'https://github.com/Codedesignplus/',
                youtube: 'https://www.youtube.com/@CodeDesignPlus',
                facebook: 'https://www.facebook.com/profile.php?id=100040970353620',
                linkedin: 'https://www.linkedin.com/in/wclg'
            },
            lastUpdated: true,
            editLink: {
                baseUrl: 'https://github.com/codedesignplus/codedesignplus.github.io/tree/main/',
            },
            plugins: [
                // @ts-ignore
                starlightImageZoom({
                    showCaptions: true
                })
            ],
            sidebar: [
                {
                    label: 'Quick Start',
                    items: [
                        {
                            label: 'Overview',
                            link: 'quick-start/'
                        }
                        , {
                            label: 'Componentes',
                            link: 'quick-start/components'
                        },
                        {
                            label: 'Herramientas de Desarrollo',
                            link: 'quick-start/tools'
                        },
                        {
                            label: 'Entorno de desarrollo',
                            link: 'quick-start/dev-environment'
                        },
                        {
                            label: 'Crear un Microservicio',
                            link: 'quick-start/create-microservice'
                        },
                        {
                            label: 'Soporte para gRPC',
                            link: 'quick-start/add-support-grpc'
                        },
                        {
                            label: 'Suscripción a Eventos',
                            link: 'quick-start/suscribe-events'
                        },
                        {
                            label: 'Pruebas Funcionales',
                            link: 'quick-start/functional-test'
                        },
                        {
                            label: 'Ejecutar con Docker',
                            link: 'quick-start/run-with-docker'
                        },
                        {
                            label: 'Logs en Grafana',
                            link: 'quick-start/view-logs-grafana-loki'
                        },
                        {
                            label: 'Monitoreo en Grafana',
                            link: 'quick-start/monitoring-grafana-prometheus'
                        },
                        {
                            label: 'Trazas en Grafana',
                            link: 'quick-start/traces-grafana-tempo'
                        },
                        {
                            label: 'Pruebas de Carga',
                            link: 'quick-start/load-test'
                        }
                    ]
                },
                {
                    label: 'Generators',
                    items: [
                        {
                            label: 'Overview',
                            link: 'generators/'
                        },
                        {
                            label: 'Microservice',
                            items: [
                                {
                                    label: "Introducción",
                                    link: 'generators/microservice'
                                },
                                {
                                    label: "Microservice (CRUD)",
                                    link: 'generators/microservice/commands/microservice-crud'
                                },
                                {
                                    label: "Microservice (Custom)",
                                    link: 'generators/microservice/commands/microservice-custom'
                                },
                                {
                                    label: "Aggregate",
                                    link: 'generators/microservice/commands/aggregate'
                                },
                                {
                                    label: "Entity",
                                    link: 'generators/microservice/commands/entity'
                                },
                                {
                                    label: "Value Object",
                                    link: 'generators/microservice/commands/value-object'
                                },
                                {
                                    label: "Domain Event",
                                    link: 'generators/microservice/commands/domain-events'
                                },
                                {
                                    label: "Repository",
                                    link: 'generators/microservice/commands/repository'
                                },
                                {
                                    label: "Controller",
                                    link: 'generators/microservice/commands/controller'
                                },
                                {
                                    label: "Proto",
                                    link: 'generators/microservice/commands/grpc-service'
                                },
                                {
                                    label: "Query",
                                    link: 'generators/microservice/commands/query'
                                },
                                {
                                    label: "Command",
                                    link: 'generators/microservice/commands/command'
                                },
                                {
                                    label: "DTO",
                                    link: 'generators/microservice/commands/dto'
                                },
                                {
                                    label: "Consumer",
                                    link: 'generators/microservice/commands/consumer'
                                },
                                {
                                    label: "gRPC",
                                    link: 'generators/microservice/commands/grpc'
                                },
                                {
                                    label: "Async Worker",
                                    link: 'generators/microservice/commands/async-worker'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Archetypes',
                    items: [
                        {
                            label: 'Overview',
                            link: 'archetypes/'
                        },
                        {
                            label: 'Architecture',
                            link: 'archetypes/architecture'
                        },
                        {
                            label: 'Layers',
                            link: 'archetypes/layers'
                        },
                        {
                            label: 'Niveles de Validación',
                            link: 'archetypes/layer-validation'
                        },
                        {
                            label: 'Unit Test',
                            link: 'archetypes/unit-test'
                        },
                        {
                            label: 'Scripts',
                            link: 'archetypes/scripts'
                        }
                    ]
                },
                {
                    label: 'SDK',
                    items: [
                        {

                            label: 'Introducción',
                            link: 'libs/introduction'
                        },
                        {
                            label: 'Estructura SDK',
                            link: 'libs/structure-sdk'
                        },
                        {
                            label: 'Core',
                            collapsed: true,
                            items: [
                                'libs/core',
                                {
                                    label: 'Configuración',
                                    link: 'libs/core/options'
                                },
                                {
                                    label: 'Extensiones',
                                    items: [
                                        'libs/core/extensions/service-collection'
                                    ]
                                },
                                {
                                    label: 'Servicios',
                                    items: [
                                        'libs/core/services/domain-event-resolver'
                                    ]
                                },
                                {
                                    label: 'Recursos',
                                    items: [
                                        'libs/core/resources/aggregate',
                                        'libs/core/resources/data-transfer-object',
                                        'libs/core/resources/domain-events',
                                        'libs/core/resources/entity',
                                        'libs/core/resources/errors',
                                        'libs/core/resources/startup'
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Criteria',
                            collapsed: true,
                            items: [
                                'libs/criteria',
                                {
                                    label: 'Extensiones',
                                    items: [
                                        'libs/criteria/extensions/criteria-extensions'
                                    ]
                                },
                                {
                                    label: 'Servicios',
                                    items: [
                                        'libs/criteria/services/tokenizer',
                                        'libs/criteria/services/parser',
                                        'libs/criteria/services/evaluator'
                                    ]
                                },
                            ]
                        }, {
                            label: 'Database',
                            items: [
                                {
                                    label: 'EFCore',
                                    collapsed: true,
                                    items: [
                                        'libs/efcore',
                                        {
                                            label: 'Configuración',
                                            link: 'libs/efcore/options'
                                        },
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/efcore/extensions/service-collection',
                                                'libs/efcore/extensions/efcore'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/efcore/services/repository-base',
                                                'libs/efcore/services/operation-base',
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Mongo',
                                    collapsed: true,
                                    items: [
                                        'libs/mongo',
                                        {
                                            label: 'Configuración',
                                            link: 'libs/mongo/options'
                                        },
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/mongo/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/mongo/services/repository-base',
                                                'libs/mongo/services/operation-base'
                                            ]
                                        },
                                    ]
                                },
                                {
                                    label: 'Redis',
                                    collapsed: true,
                                    items: [
                                        'libs/redis',
                                        {
                                            label: 'Configuración',
                                            link: 'libs/redis/options'
                                        },
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/redis/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/redis/services/redis-service',
                                                'libs/redis/services/redis-factory'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Event Sourcing',
                            items: [
                                {
                                    label: 'Event Sourcing',
                                    collapsed: true,
                                    items: [
                                        'libs/event-sourcing',
                                        'libs/event-sourcing/options',
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/event-sourcing/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/event-sourcing/services/aggregate-root',
                                                'libs/event-sourcing/services/event-sourcing',
                                            ]
                                        },
                                    ]
                                },
                                {
                                    label: 'Event Store',
                                    collapsed: true,
                                    items: [
                                        'libs/eventstore',
                                        'libs/eventstore/options',
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/eventstore/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/eventstore/services/event-store-connection',
                                                'libs/eventstore/services/event-store-factory',
                                                'libs/eventstore/services/event-store-service',
                                            ]
                                        },
                                    ]

                                }
                            ]
                        },
                        {
                            label: 'Event Driven',
                            items: [
                                {
                                    label: 'PubSub',
                                    collapsed: true,
                                    items: [
                                        'libs/pubsub',
                                        'libs/pubsub/options',
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/pubsub/extensions/pub-sub',
                                                'libs/pubsub/extensions/service-collection',
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/pubsub/services/activity',
                                                'libs/pubsub/services/event-handler',
                                                'libs/pubsub/services/event-queue',
                                                'libs/pubsub/services/message',
                                                'libs/pubsub/services/pub-sub',
                                            ]
                                        },
                                    ]
                                },
                                {
                                    label: 'RabbitMQ',
                                    collapsed: true,
                                    items: [
                                        'libs/rabbitmq',
                                        'libs/rabbitmq/options',
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/rabbitmq/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/rabbitmq/services/rabbit-connection',
                                                'libs/rabbitmq/services/channel-provider',
                                                'libs/rabbitmq/services/rabbit-pubsub'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Kafka',
                                    collapsed: true,
                                    items: [
                                        'libs/kafka',
                                        'libs/kafka/options',
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/kafka/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/kafka/services/kafka-pubsub',
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Redis PubSub',
                                    collapsed: true,
                                    items: [
                                        'libs/redis-pubsub',
                                        'libs/redis-pubsub/options',
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/redis-pubsub/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/redis-pubsub/services/redis-pubsub',
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Event Store PubSub',
                                    collapsed: true,
                                    items: [
                                        'libs/eventstore-pubsub',
                                        'libs/eventstore-pubsub/options',
                                        {
                                            label: 'Extensiones',
                                            items: [
                                                'libs/eventstore-pubsub/extensions/service-collection'
                                            ]
                                        },
                                        {
                                            label: 'Servicios',
                                            items: [
                                                'libs/eventstore-pubsub/services/event-store-pub-sub',
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Exceptions',
                            collapsed: true,
                            items: [
                                'libs/exceptions',
                                'libs/exceptions/extensions/guard-extension',
                                'libs/exceptions/exceptions/codedesignplusexception',
                                'libs/exceptions/models',
                                {
                                    label: 'Guards',
                                    items: [
                                        'libs/exceptions/guards/application-guard',
                                        'libs/exceptions/guards/domain-guard',
                                        'libs/exceptions/guards/infrastructure-guard',
                                    ]
                                },
                            ]
                        },
                        
                        {
                            label: 'Generator',
                            collapsed: true,
                            items: [
                                'libs/generator',
                                'libs/generator/generators/dto-generator'
                            ]
                        },
                        {
                            label: 'Logger',
                            collapsed: true,
                            items: [
                                'libs/logger',
                                {
                                    label: 'Configuración',
                                    link: 'libs/logger/options'
                                },
                                {
                                    label: 'Extensiones',
                                    items: [
                                        'libs/logger/extensions/service-collection'
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Microservice Commons',
                            collapsed: true,
                            items: [
                                'libs/microservice-commons',
                                {
                                    label: 'Interceptors',
                                    items: [
                                        'libs/microservice-commons/interceptors/error-interceptor'
                                    ]
                                },
                                {
                                    label: 'Middlewares',
                                    items: [
                                        'libs/microservice-commons/middlewares/error-middleware'
                                    ]
                                },
                                {
                                    label: 'Extensiones',
                                    items: [
                                        'libs/microservice-commons/extensions/fluent-validation',
                                        'libs/microservice-commons/extensions/mediatr',
                                        'libs/microservice-commons/extensions/swagger',
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Observability',
                            collapsed: true,
                            items: [
                                'libs/observability',
                                {
                                    label: 'Configuración',
                                    link: 'libs/observability/options'
                                },
                                {
                                    label: 'Extensiones',
                                    items: [
                                        'libs/observability/extensions/service-collection',
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Security',
                            collapsed: true,
                            items: [
                                'libs/security',
                                {
                                    label: 'Configuración',
                                    link: 'libs/security/options'
                                },
                                {
                                    label: 'Extensiones',
                                    items: [
                                        'libs/security/extensions/service-collection',
                                    ]
                                },
                                {
                                    label: 'Servicios',
                                    items: [
                                        'libs/security/services/user-context',
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Serializers',
                            collapsed: true,
                            items: [
                                'libs/serializers',
                                {
                                    label: 'Servicios',
                                    items: [
                                        'libs/serializers/services/json-serializer',
                                        'libs/serializers/services/event-contract-resolver'
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Unit Test',
                            items: [
                                {
                                    label: 'xUnit',
                                    collapsed: true,
                                    items: [
                                        'libs/xunit',
                                        {
                                            label: 'Containers',
                                            items: [
                                                'libs/xunit/containers/event-store-container',
                                                'libs/xunit/containers/kafka-container',
                                                'libs/xunit/containers/mongo-container',
                                                'libs/xunit/containers/observability-container',
                                                'libs/xunit/containers/otel-container',
                                                'libs/xunit/containers/rabbitmq-container',
                                                'libs/xunit/containers/redis-container',
                                                'libs/xunit/containers/sql-server-container',
                                                'libs/xunit/containers/vault-container',
                                            ]
                                        },
                                        {
                                            label: 'Extensions',
                                            items: [
                                                'libs/xunit/extensions/configuration-util',
                                                'libs/xunit/extensions/data-annotations',
                                                'libs/xunit/extensions/logger',
                                                'libs/xunit/extensions/xunit-logger',
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'xUnit Microservice',
                                    collapsed: true,
                                    items: [
                                        'libs/xunit-microservice',
                                        {
                                            label: 'Server',
                                            items: [
                                                'libs/xunit-microservice/server/server',
                                                'libs/xunit-microservice/server/auth-handler',
                                                'libs/xunit-microservice/server/inmemory-logger',
                                            ]
                                        },
                                        {
                                            label: 'Attributes',
                                            items: [
                                                'libs/xunit-microservice/attributes/aggregate',
                                                'libs/xunit-microservice/attributes/command',
                                                'libs/xunit-microservice/attributes/domain-event',
                                                'libs/xunit-microservice/attributes/dto',
                                                'libs/xunit-microservice/attributes/entity',
                                                'libs/xunit-microservice/attributes/errors',
                                                'libs/xunit-microservice/attributes/query',
                                                'libs/xunit-microservice/attributes/startup'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        }),
        icon(),
        sitemap()
    ]
});