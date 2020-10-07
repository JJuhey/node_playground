import React, { useState } from 'react'
import { Table, Button, Divider, Header } from 'semantic-ui-react'
import AddBoardForm from './Sections/AddBoardForm'

function BoardPage() {
  const [ShowAddBoard, setShowAddBoard] = useState(false)

  const toggleAddBoard = () => {
    setShowAddBoard(!ShowAddBoard)
  }

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>NO</Table.HeaderCell>
            <Table.HeaderCell
              style={{ width: '60%' }}
            >TITLE</Table.HeaderCell>
            <Table.HeaderCell>WRITER</Table.HeaderCell>
            <Table.HeaderCell>VIEWS</Table.HeaderCell>
            <Table.HeaderCell>DATE</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {dummyData.map(data => {
            return (
              <Table.Row>
                <Table.Cell>{data.no}</Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.writer}</Table.Cell>
                <Table.Cell>{data.views}</Table.Cell>
                <Table.Cell>{data.date}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Button
                floated='right'
                primary
                size='small'
                onClick={toggleAddBoard}
              >Add Board</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      { ShowAddBoard && (
        <div style={{ marginTop: '50px' }} >
          <Header style={{ textAlign: 'left' }}>게시글 추가하기</Header>
          <Divider/>
          <AddBoardForm/>
        </div>
      )}
    </div>
  )
}

export default BoardPage

const dummyData = [
  {
    no: 3,
    title: '테스트 게시글입니다. 내용없습니다.',
    writer: '쭈헤이',
    views: 1,
    date: '2020-10-04',
  },
  {
    no: 2,
    title: '게시판 테스트입니다.',
    writer: 'admin',
    views: 99,
    date: '2020-10-03',
  },
  {
    no: 1,
    title: '공지사항입니다. 필독 부탁드립니다!',
    writer: 'admin',
    views: 84,
    date: '2020-10-01',
  },
]