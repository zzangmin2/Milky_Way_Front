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

/**
 * 이력서 수정시 career에 대한 유효성검사 ( 빈 값인지 아닌지를 판단, 날짜 정보 판단 )
 * @param userCareer
 * @param userCertificate
 * @returns
 */
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

  // const careerName = userCareer.filter((userCareer) => userCareer.carName);
  // const certificateName = userCertificate.filter(
  //   (userCerticicate) => userCerticicate.certName
  // );
  const emptyCertificateNames = userCertificate.filter(
    (userCertificate) => userCertificate.certName.trim() === ""
  );
  const emptyCertificateDates = userCertificate.filter(
    (userCertificate) => userCertificate.certDate.trim() === ""
  );

  if (emptyCareerDates.length > 0 || emptyCertificateDates.length > 0) {
    alert("경력과 자격증의 날짜를 모두 작성해주세요.");
    return false;
  }

  if (emptyCareerNames.length > 0 || emptyCertificateNames.length > 0) {
    alert("경력과 자격증의 이름을 모두 작성해주세요.");
    return false;
  }

  // if (careerName.length > 35 || certificateName.length > 35) {
  //   alert("경력 및 자격증 이름은 35글자를 넘을 수 없습니다.");
  //   return false;
  // }
  return true;
};

/**
 * signupinfo에서 전화번호에 대한 유효성검사
 * @param number
 * @returns
 */
export const validatePhoneNumber = (
  number: string
): { isValid: boolean; message: string } => {
  const phoneNumberRegex = /^\d{11}$/; // 11자리 숫자

  if (!phoneNumberRegex.test(number)) {
    return {
      isValid: false,
      message: "전화번호 형식이 일치하지 않습니다",
    };
  }

  return { isValid: true, message: "" };
};

/**
 * signupinfo에서 이름에 대한 유효성검사
 * @param name
 * @returns
 */
export const validateName = (
  name: string
): { isValid: boolean; message: string } => {
  const nameRegex = /^[a-zA-Z가-힣]+$/; // 영문자와 한글 (int못오게)

  if (!nameRegex.test(name)) {
    return {
      isValid: false,
      message: "이름에는 숫자나 특수문자가 들어갈 수 없습니다.",
    };
  }

  return { isValid: true, message: "" };
};

/**
 * signupcompare에서 중복확인 시 id 유효성검사
 * @param id
 * @returns
 */
export const validateSignupId = (
  id: string
): { isValid: boolean; message: string } => {
  const regex: RegExp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/; // 숫자와 문자가 들어가있는지 검사하는 유효성 검사
  const regKr: RegExp = /[\u3131-\uD79D]/; // 한글을 포함하는 유효성 검사

  if (regKr.test(id)) {
    return { isValid: false, message: "아이디에는 한글이 입력될 수 없습니다." };
  }

  if (!regex.test(id)) {
    return {
      isValid: false,
      message: "아이디에 숫자와 문자를 모두 입력해주세요",
    };
  }

  return { isValid: true, message: "" };
};

/**
 * signupcompare에서 아이디 및 비밀번호 유효성검사
 * @param id
 * @param password
 * @param confirmPassword
 * @returns
 */
export const validateSignupCompare = (
  id: string,
  password: string,
  confirmPassword: string
): { isValid: boolean; message: string } => {
  const regex: RegExp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/; // 숫자와 문자가 들어가있는지 검사하는 유효성 검사
  const regKr: RegExp = /[\u3131-\uD79D]/; // 한글을 포함하는 유효성 검사

  if (!id || !password || !confirmPassword) {
    return { isValid: false, message: "아이디와 비밀번호를 입력해주세요." };
  }

  if (regKr.test(password)) {
    return {
      isValid: false,
      message: "비밀번호에는 한글이 들어갈 수 없습니다.",
    };
  }

  if (!regex.test(id)) {
    return {
      isValid: false,
      message: "아이디에 숫자와 문자를 모두 입력해주세요",
    };
  }

  if (!regex.test(password)) {
    return {
      isValid: false,
      message: "비밀번호에는 영문자와 숫자가 포함되어야 합니다.",
    };
  }

  if (password !== confirmPassword) {
    return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
  }

  if (password === id) {
    return {
      isValid: false,
      message: "비밀번호는 아이디와 다르게 입력해주세요",
    };
  }

  return { isValid: true, message: "" };
};
