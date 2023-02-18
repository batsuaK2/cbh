# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Questions for clarification

1. Is the requirement to use the custom id only in the pdf report or will it be used other places? 
2. Depending on answer to 1 we may need to have the custom id in the agent metadata returned by `getShiftsByFacility` or just add it only in the  `generateReport`.
3. How do we map database id to custom id ? We need a 1:1 relation. Is it 1:many relation?
4. Where is this custom id stored? Is it another field in the agent table or any other table?
5. Assuming the custom id is not unique we should never use it as key for any index.
6. Custom id length ? Custom id length ideally should not be greater than database id length (character length)
7. What happens if custom id is not assigned? Do we use database id?
8. is custom id alphanumeric, all characters, utf-8 ?

### Ticket 1: 
Type : Spike
Task : Clarification questions
Points : 2

### Ticket 2:
Type : Task
Task : Design & Code the solution (Assuming the custom id is in the Agents table the best approach imo is to add it in the metadata that is returned by the `getShiftsByFacility`)
Points : 2

### Ticket 3:
Type : Task
Task : Design the solution (We need to get it displayed in the report so use the custom id in agent metadata when creating the report)
Points : 1