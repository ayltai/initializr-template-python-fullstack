from sqlalchemy.engine import Engine
from sqlmodel import select, Session

from ..models import Count


class CountRepository:
    def __init__(self, engine: Engine):
        self.engine = engine

    def init(self) -> Count:
        with Session(self.engine) as session:
            count = Count(value=0)
            session.add(count)
            session.commit()

            return count

    def get(self) -> Count:
        with Session(self.engine) as session:
            return session.exec(select(Count)).first()

    def increment(self) -> Count:
        with Session(self.engine) as session:
            count = self.get()
            count.value += 1
            session.add(count)
            session.commit()

            return count

    def decrement(self) -> Count:
        with Session(self.engine) as session:
            count = self.get()
            count.value -= 1
            session.add(count)
            session.commit()
            
            return count

    def reset(self) -> Count:
        with Session(self.engine) as session:
            count = self.get()
            count.value = 0
            session.add(count)
            session.commit()
            
            return count
