import styled from 'styled-components'
import {
  Accordion,
  AccordionSummary,
  Typography,
  Badge,
  AccordionDetails,
  Select,
  FormControl,
  MenuItem,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    transform: translate(25px, -11px);
  }
`

export const FilterItem = ({
  name,
  filter,
  selectName,
  select,
  expanded,
  handleChange,
  handleChangeFilter,
  panelNum,
  isNumber = false,
}) => {
  return (
    <Accordion expanded={expanded} onChange={handleChange(`panel${panelNum}`)}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography component="h6">
          {name}
          {filter.length > 0 && <StyledBadge badgeContent={filter.length} color="primary" />}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl style={{ width: '100%' }}>
          <Select multiple name={selectName} value={filter} onChange={e => handleChangeFilter(e)}>
            {isNumber
              ? Array.from({ length: 11 }, (_, p) => (
                  <MenuItem key={p} value={p} component="h6">
                    {`${name} ${p}${p === 10 ? '+' : ''}`}
                  </MenuItem>
                ))
              : select &&
                select.map(({ id, name }) => (
                  <MenuItem key={id} value={id} component="h6">
                    {name}
                  </MenuItem>
                ))}

            {}
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  )
}
