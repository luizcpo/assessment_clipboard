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

### Ticket - Agents table should include custom facility ID
As it's not advisable to give the ID creation to a person, for achieving this task of giving Facilities a better way to identify theirs Agents, we should include an EXTRA column on the Agents table in order for store the ID created by the factory. 
- The column should be of the type TEXT and should have a limit of 60 chars.
- The name of the colunm should be custom_factory_id

### Ticket - Agents creation form should include a field for a custom facility ID
On Agent's creation form we should include a field that would allow the Factories to inform us the custom_factory_id with the same limitation we have on DB (string of 60 char max).
- Make sure we change the controller/services responible to save the new attribute on the db. That would include creation and update methods;
- Include modifications on the type/model of the Agent class to update with the new attribute and to create some validations
- Make sure that we update any unity or e2e tests that creates and updates Agents.

### Ticket - Shifts generation should add the custmon facility ID in metadata of Agents
As the report informations are the final target, we need to include the new attribute on the metadata that is stored on the Shifts table. That would include but not limited to:
- Modify controllers/services that would create and update Shifts;
- Modify unity tests for making sure the new metadata attribute is included on the new schema.

### Ticket - Generate the Facilies with the custom ID instead of the DB ID
The last part is to modify the report using the custom_factory_id instead of the db id.
That would include 2 modifications at a first glence: 
- Change the generateReport method for using custom_factory_id on the report;
- Change the unity test with the new rule: custom_factory_id is the id used in the report.

### Ticket - Change any documentation
Update the documentation with the new information about Shifts metadata, Agents attributes, Agent creation and updating forms, and the new report's format.