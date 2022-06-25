import { request, ClientError } from 'graphql-request'

export const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ document, variables }: { document: string, variables?: any }) => {
    try {
      const result = await request(baseUrl, document, variables)
      return { data: result }
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } }
      }
      return { error: { status: 500, data: error } }
    }
  }