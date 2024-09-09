"use client";
import {
	Week,
	Month,
	Agenda,
	ScheduleComponent,
	ViewsDirective,
	ViewDirective,
	EventSettingsModel,
	ResourcesDirective,
	ResourceDirective,
	Inject,
	Resize,
	DragAndDrop,
	TimelineViews,
	MonthAgenda,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { timelineResourceData } from "@/components/DataSources";

export default function Home() {
	const eventSettings: EventSettingsModel = {
		dataSource: timelineResourceData,
	};
	const group = { byGroupID: false };

	const projectData: Object[] = [
		{ text: "PROJECT 1", id: 1, color: "#cb6bb2" },
		// { text: "PROJECT 2", id: 2, color: "#56ca85" },
		// { text: "PROJECT 3", id: 3, color: "#df5286" },
	];
	const categoryData: Object[] = [
		{ text: "Development", id: 1, color: "#1aaa55" },
		// { text: "Testing", id: 2, color: "#7fa900" },
	];
	return (
		<>
			<h2 className="mb-20">Syncfusion React Schedule Component</h2>
			<ScheduleComponent
				width="96%"
				height="550px"
				currentView="Month"
				selectedDate={new Date(2018, 3, 4)}
				eventSettings={eventSettings}
				group={group}
				className="mx-auto"
			>
				<ViewsDirective>
					<ViewDirective option="Week" />
					<ViewDirective option="Month" />
					<ViewDirective option="Agenda" />
					<ViewDirective option="MonthAgenda" />
				</ViewsDirective>
				<ResourcesDirective>
					<ResourceDirective
						field="ProjectId"
						title="Choose Project"
						name="Projects"
						allowMultiple={false}
						dataSource={projectData}
						textField="text"
						idField="id"
						colorField="color"
					></ResourceDirective>
					<ResourceDirective
						field="TaskId"
						title="Category"
						name="Categories"
						allowMultiple={true}
						dataSource={categoryData}
						textField="text"
						idField="id"
						colorField="color"
					></ResourceDirective>
				</ResourcesDirective>
				<Inject
					services={[Week, Month, Agenda, Resize, DragAndDrop, MonthAgenda, WorkWeek]}
				/>
			</ScheduleComponent>
		</>
	);
}
