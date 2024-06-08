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
): { isValid: boolean; message: string } => {
  const emptyCareerNames = userCareer.filter(
    (career) => career.carName.trim() === ""
  );

  const emptyCareerDates = userCareer.filter(
    (career) =>
      career.carStartDay.trim() === "" || career.carEndDay.trim() === ""
  );

  const emptyCertificateNames = userCertificate.filter(
    (certificate) => certificate.certName.trim() === ""
  );

  const emptyCertificateDates = userCertificate.filter(
    (certificate) => certificate.certDate.trim() === ""
  );

  if (emptyCareerDates.length > 0 || emptyCertificateDates.length > 0) {
    return {
      isValid: false,
      message: "경력과 자격증의 날짜를 모두 작성해주세요.",
    };
  }

  if (emptyCareerNames.length > 0 || emptyCertificateNames.length > 0) {
    return {
      isValid: false,
      message: "경력과 자격증의 이름을 모두 작성해주세요.",
    };
  }

  if (emptyCareerNames.length > 10 || emptyCertificateNames.length > 10) {
    return {
      isValid: false,
      message: "경력과 자격증의 이름은 10글자를 넘을 수 없습니다.",
    };
  }

  return { isValid: true, message: "" };
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

/**
 * myinfo에서 내정보 수정할시에 유효성 검사 ( Signup compare와 합치는거 생각해봐야함)
 * @param userNumber
 * @param userName
 * @param userEmail
 * @returns
 */
export const validateMyInfo = (
  userNumber: any,
  userName: string,
  userEmail: any
): { isValid: boolean; message: string } => {
  const phoneNumberRegex = /^\d{11}$/; // 11자리 숫자
  const nameRegex = /^[a-zA-Z가-힣]+$/; // 영문자와 한글 (int못오게)
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 형식 ( SignupEmail )

  if (!phoneNumberRegex.test(userNumber)) {
    return {
      isValid: false,
      message: "전화번호 형식이 일치하지 않습니다",
    };
  }

  if (!nameRegex.test(userName)) {
    return {
      isValid: false,
      message: "이름에는 숫자나 특수문자가 들어갈 수 없습니다.",
    };
  }

  if (!emailRegex.test(userEmail)) {
    return {
      isValid: false,
      message: "이메일 형식에 맞게 입력해주세요",
    };
  }

  return { isValid: true, message: "" };
};
