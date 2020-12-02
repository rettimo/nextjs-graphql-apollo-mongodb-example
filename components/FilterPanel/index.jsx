import { useState } from 'react'
import styled from 'styled-components'
import { useGetFilters } from '../../utils/hooks/useGetFilters'
import { cardFiltersVar } from '../../apollo/localVariables'
import { ExpandMore } from '@material-ui/icons'
import {
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Badge,
} from '@material-ui/core'

import { FilterItem } from './FilterItem'

const StyledFilterPanel = styled.div`
  padding: 20px 0;
  background-color: rgba(255, 255, 97, 0.2);
`

const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    transform: translate(25px, -11px);
  }
`

const AccordionsWraper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const AccordionGroup = styled.div`
  width: 32%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const FilterPanel = () => {
  const [expanded, setExpanded] = useState(false)
  const { data, filters } = useGetFilters()

  const handleChange = panel => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleChangeFilter = e => {
    cardFiltersVar({
      ...cardFiltersVar(),
      [e.target.name]: e.target.value,
    })
  }

  return (
    <StyledFilterPanel>
      <Container>
        <AccordionsWraper>
          <AccordionGroup>
            <FilterItem
              name="Набор"
              panelNum={1}
              filter={filters.cardSetId}
              selectName="cardSetId"
              select={data && data.metadata.sets}
              expanded={expanded === 'panel1'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
            />
            <FilterItem
              name="Класс"
              panelNum={2}
              filter={filters.classId}
              selectName="classId"
              select={data && data.metadata.classes}
              expanded={expanded === 'panel2'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
            />
            <FilterItem
              name="Тип карты"
              panelNum={3}
              filter={filters.cardTypeId}
              selectName="cardTypeId"
              select={data && data.metadata.types}
              expanded={expanded === 'panel3'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
            />
          </AccordionGroup>
          <AccordionGroup>
            <FilterItem
              name="Мана"
              panelNum={4}
              filter={filters.manaCost}
              selectName="manaCost"
              expanded={expanded === 'panel4'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
              isNumber
            />
            <FilterItem
              name="Здоровье"
              panelNum={5}
              filter={filters.health}
              selectName="health"
              expanded={expanded === 'panel5'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
              isNumber
            />
            <FilterItem
              name="Атака"
              panelNum={6}
              filter={filters.attack}
              selectName="attack"
              expanded={expanded === 'panel6'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
              isNumber
            />
          </AccordionGroup>
          <AccordionGroup>
            <FilterItem
              name="Тип существа"
              panelNum={7}
              filter={filters.minionTypeId}
              selectName="minionTypeId"
              select={data && data.metadata.minionTypes}
              expanded={expanded === 'panel7'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
            />
            <FilterItem
              name="Редкость"
              panelNum={8}
              filter={filters.rarityId}
              selectName="rarityId"
              select={data && data.metadata.rarities}
              expanded={expanded === 'panel8'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
            />
            <FilterItem
              name="Свойства"
              panelNum={9}
              filter={filters.keywordIds}
              selectName="keywordIds"
              select={data && data.metadata.keywords}
              expanded={expanded === 'panel9'}
              handleChange={handleChange}
              handleChangeFilter={handleChangeFilter}
            />
          </AccordionGroup>
        </AccordionsWraper>
      </Container>
    </StyledFilterPanel>
  )
}
