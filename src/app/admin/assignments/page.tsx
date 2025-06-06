import prisma from "@/lib/prisma";

export default async function AssignmentsPage() {
  const teachers = await prisma.teacher.findMany({
    include: { subjects: true }
  });

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Teacher Assignments</h2>
      <ul>
        {teachers.map(t => (
          <li key={t.id} className="mb-2">
            <strong>{t.name}</strong>: {t.subjects.map(s => s.name).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}