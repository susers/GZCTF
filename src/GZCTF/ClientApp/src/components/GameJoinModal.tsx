import {FC, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Button, Modal, ModalProps, Select, Stack, TextInput} from '@mantine/core'
import {showNotification} from '@mantine/notifications'
import {mdiClose} from '@mdi/js'
import {Icon} from '@mdi/react'
import {useGame} from '@Utils/useGame'
import {useTeams, useUser} from '@Utils/useUser'
import {GameJoinModel} from '@Api'
import {Text} from '@mantine/core'

interface GameJoinModalProps extends ModalProps {
  onSubmitJoin: (info: GameJoinModel) => Promise<void>
}

const GameJoinModal: FC<GameJoinModalProps> = (props) => {
  const {id} = useParams()
  const {user} = useUser()
  const numId = parseInt(id ?? '-1')
  const {onSubmitJoin, ...modalProps} = props
  const {teams} = useTeams()
  const {game} = useGame(numId)

  const [inviteCode, setInviteCode] = useState('')
  const [organization, setOrganization] = useState('')
  const [team, setTeam] = useState('')
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (teams && teams.length === 1) {
      setTeam(teams[0].id!.toString())
    }
  }, [teams])

  useEffect(() => {
    if (game?.organizations && game.organizations.sort().toString() == ['本科生', '研究生', '本科新生', '校外'].sort().toString()) {
      if (user?.stdNumber?.startsWith('21323')) {
        game.organizations = ['本科新生']
        setOrganization('本科新生')
      } else if (user?.stdNumber?.startsWith('213')) {
        game.organizations = ['本科生']
        setOrganization('本科生')
      } else {
        game.organizations = ['研究生']
        setOrganization('研究生')
      }
    }
  }, [user, game]);

  const onJoinGame = () => {
    setDisabled(true)

    if (!team) {
      showNotification({
        color: 'orange',
        message: '请选择参赛队伍',
        icon: <Icon path={mdiClose} size={1}/>,
      })
      setDisabled(false)
      return
    }

    if (game?.inviteCodeRequired && !inviteCode) {
      showNotification({
        color: 'orange',
        message: '邀请码不能为空',
        icon: <Icon path={mdiClose} size={1}/>,
      })
      setDisabled(false)
      return
    }

    if (game?.organizations && game.organizations.length > 0 && !organization) {
      showNotification({
        color: 'orange',
        message: '请选择参赛组织',
        icon: <Icon path={mdiClose} size={1}/>,
      })
      setDisabled(false)
      return
    }

    onSubmitJoin({
      teamId: parseInt(team),
      inviteCode: game?.inviteCodeRequired ? inviteCode : undefined,
      organization: game?.organizations && game.organizations.length > 0 ? organization : undefined,
    }).finally(() => {
      setInviteCode('')
      setOrganization('')
      setDisabled(false)
      props.onClose()
    })
  }

  return (
    <Modal {...modalProps}>
      <Stack>
        <Select
          required
          withinPortal
          label="选择你的参赛队伍"
          description="请选择一个队伍参与比赛，选定后不可更改"
          data={teams?.map((t) => ({label: t.name!, value: t.id!.toString()})) ?? []}
          disabled={disabled}
          value={team}
          onChange={(e) => setTeam(e ?? '')}
        />
        {game?.inviteCodeRequired && (
          <TextInput
            required
            label="请输入邀请码"
            description="本场比赛开启了邀请参赛，报名参赛需提供邀请码"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            disabled={disabled}
          />
        )}
        {game?.organizations && game.organizations.length > 0 && (
          <>
            <Select
              required
              withinPortal
              label="选择你的参赛组织"
              description="本场比赛具有多个参赛组织，请选择你的参赛组织"
              data={game.organizations}
              disabled={disabled}
              value={organization}
              onChange={(e) => setOrganization(e ?? '')}
            />
            <Text size="sm">
              参赛组别根据个人资料中的一卡通号自动选择，若不正确，请检查一卡通号是否有误或联系组委会。请勿直接报名参赛，避免成绩无法统计。
            </Text>
          </>
        )}
        <Button disabled={disabled} onClick={onJoinGame}>
          报名参赛
        </Button>
      </Stack>
    </Modal>
  )
}

export default GameJoinModal
