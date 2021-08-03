import React from 'react';
import * as S from './styled';
import AppLayout from 'components/layout/AppLayout';
import DocumentCard from 'components/DocumentCard';
import DocumentCardBg from 'images/bg-linear-pfd.png';
import IconCard from 'images/Icon-pfd.png';
import { Heading2, Text } from 'components/common/Typo';
import CardQuestion from 'components/BannerQuestion';
export default function HomePage() {
  return (
    <AppLayout>
      <S.Text issBold>Our Files</S.Text>
      <Heading2 size="xxxl" padding="20px 0px">
        Documents
      </Heading2>
      <div className="row">
        <div className="col-md-3">
          <DocumentCard $bg={DocumentCardBg} $src={IconCard}>
            <Text isWhite margin="30px 0px 0px 0px">
              Terms & Conditions
            </Text>
          </DocumentCard>
        </div>
        <div className="col-md-3">
          <DocumentCard $bg={DocumentCardBg} $src={IconCard}>
            <Text isWhite margin="30px 0px 0px 0px">
              White Pappers
            </Text>
          </DocumentCard>
        </div>
        <div className="col-md-3">
          <DocumentCard $bg={DocumentCardBg} $src={IconCard}>
            <Text isWhite margin="30px 0px 0px 0px">
              Privacy Policy
            </Text>
          </DocumentCard>
        </div>
        <div className="col-md-3">
          <DocumentCard $bg={DocumentCardBg} $src={IconCard}>
            <Text isWhite margin="30px 0px 0px 0px">
              Business Profile
            </Text>
          </DocumentCard>
        </div>
      </div>
      <S.WrapTextQuestion>
        <div>
          <S.TextQuestion issBold>FAQ</S.TextQuestion>
          <Heading2 padding="20px">Have any questions?</Heading2>
        </div>
      </S.WrapTextQuestion>

      <S.QuestionContent>
        <div className="row">
          <div className="col-md-12">
            <CardQuestion>
              <S.ChildText size="xl" issBold>
                Does the crowdsale comply with legal regulations?
              </S.ChildText>
            </CardQuestion>
          </div>
          <div className="col-md-12">
            <CardQuestion>
              <S.ChildText size="xl">Why is Scorum’s economic model sustainable?</S.ChildText>
            </CardQuestion>
          </div>
          <div className="col-md-12">
            <CardQuestion>
              <S.ChildText size="xl">Can I trade SCR at an exchange?</S.ChildText>
            </CardQuestion>
          </div>
          <div className="col-md-12">
            <CardQuestion>
              <S.ChildText size="xl">
                What is the difference between Scorum Coin tokens and Scorum Power tokens?
              </S.ChildText>
            </CardQuestion>
          </div>
        </div>
      </S.QuestionContent>
    </AppLayout>
  );
}
