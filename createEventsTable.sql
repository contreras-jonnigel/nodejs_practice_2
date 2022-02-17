CREATE TABLE events (
    eventId int IDENTITY (1,1) PRIMARY KEY CLUSTERED NOT NULL,
    eventTitle nvarchar(100) NOT NULL,
    eventDescription nvarchar (1500) NOT NULL,
    startDate date NOT NULL,
    endDate date NOT NULL,
    avenue nvarchar (200) NOT NULL,
    maxMembers int NOT NULL
)