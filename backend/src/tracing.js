// Example filename: tracing.js
'use strict';

const opentelemetry = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } =  require('@opentelemetry/exporter-trace-otlp-http');
const { SimpleSpanProcessor, ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

// use console exporter instead of otlp
const sdk = new opentelemetry.NodeSDK({
    traceExporter: new OTLPTraceExporter(),
    //spanProcessor: new SimpleSpanProcessor(new ConsoleSpanExporter()),
    instrumentations: [
        getNodeAutoInstrumentations({
            // we recommend disabling fs autoinstrumentation since it can be noisy
            // and expensive during startup
            '@opentelemetry/instrumentation-fs': {
                enabled: false,
            },
        }),
    ],
});
console.log('Starting backend tracing');
sdk.start();
