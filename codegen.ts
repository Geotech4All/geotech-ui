
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:8000/graphql",
  documents: "src/features/graphql/requests/**/*.ts",
  generates: {
    "src/features/graphql/codegen/graphql.tsx": {
      plugins: ["typescript"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
