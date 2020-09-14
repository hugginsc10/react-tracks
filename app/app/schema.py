import graphene

import tracks.schema

class Query(tracks.schema.Query, graphene.ObjectTpe):
  pass

schema = graphene.Schema(query=Query)