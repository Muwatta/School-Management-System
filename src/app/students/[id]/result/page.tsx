import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { PDFDownloadLink } from "@react-pdf/renderer"; // You need to install @react-pdf/renderer

export default async function StudentResultPage({ params }) {
  const student = await prisma.student.findUnique({
    where: { id: Number(params.id) },
    include: { results: true, fees: true },
  });

  if (!student) return notFound();

  const allResultsEntered = student.results.length >= 10; // or your logic
  const owesFees = student.fees?.owed > 0;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Student Result</h2>
      {allResultsEntered && !owesFees ? (
        <PDFDownloadLink
          document={<ResultPDF student={student} />}
          fileName={`result-${student.name}.pdf`}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {({ loading }) => (loading ? "Preparing PDF..." : "Download PDF")}
        </PDFDownloadLink>
      ) : (
        <div className="text-red-600">
          {owesFees
            ? "Cannot print result: Student is owing school fees."
            : "Cannot print result: Not all results have been entered."}
        </div>
      )}
    </div>
  );
}

// You need to create the ResultPDF component using @react-pdf/renderer