// validation.ts

interface Career {
  id: number;
  carName: string;
  carStartDay: string;
  carEndDay: string;
}

interface Certificate {
  id: number;
  certName: string;
  certDate: string;
}

export const validateCareer = (
  userCareer: Career[],
  userCertificate: Certificate[]
): boolean => {
  const emptyCareerNames = userCareer.filter(
    (userCareer) => userCareer.carName.trim() === ""
  );
  const emptyCareerDates = userCareer.filter(
    (userCareer) =>
      userCareer.carStartDay.trim() === "" || userCareer.carEndDay.trim() === ""
  );
  const emptyCertificateNames = userCertificate.filter(
    (userCertificate) => userCertificate.certName.trim() === ""
  );
  const emptyCertificateDates = userCertificate.filter(
    (userCertificate) => userCertificate.certDate.trim() === ""
  );

  if (emptyCareerNames.length > 0 || emptyCertificateNames.length > 0) {
    alert("경력과 자격증의 이름을 모두 작성해주세요.");
    return false;
  }

  if (emptyCareerDates.length > 0 || emptyCertificateDates.length > 0) {
    alert("경력과 자격증의 날짜를 모두 작성해주세요.");
    return false;
  }

  return true;
};
