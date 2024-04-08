import Input from "../../components/Input";
import StudyInfoCard from "../../components/StudyInfoCard";
import {
  FilterWrap,
  SearchWrap,
  ListWrap,
  StudyProjectTypeNavWrap,
} from "./styles";

const Search = () => {
  return (
    <>
      <SearchWrap>
        <section>
          <Input placeholder="스터디/프로젝트를 찾아 보세요!" />
        </section>

        <StudyProjectTypeNavWrap>
          <ul>
            <li>ALL</li>
            <li>스터디</li>
            <li>프로젝트</li>
          </ul>
        </StudyProjectTypeNavWrap>

        <FilterWrap>
          <select name="" id="">
            <option value="">모집 중</option>
            <option value="">모집 완료</option>
          </select>

          <select name="" id="">
            <option value="">카테고리</option>
            <option value="">언어</option>
          </select>
        </FilterWrap>
        <ListWrap>
          <div>
            <select name="" id="">
              <option value="">최신순</option>
              <option value="">인기순</option>
            </select>
          </div>
          <StudyInfoCard CardType="" />
        </ListWrap>
      </SearchWrap>
    </>
  );
};

export default Search;
