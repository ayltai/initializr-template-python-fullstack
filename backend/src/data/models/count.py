from sqlmodel import Field, SQLModel


class Count(SQLModel, table=True):
    id    : int = Field(default=None, primary_key=True)
    value : int
