import Vue from 'vue';
import Number from './';

const renderComponent = (Component, propsData) => {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
};

const getRenderedText = (Component, propsData) => {
  const component = renderComponent(Component, propsData);
  return component.$el.textContent;
};

const getRenderedClasses = (Component, propsData) => {
  const component = renderComponent(Component, propsData);
  return component.$el.className;
};

describe('Number', () => {
  it('displays the correct number', () => {
    expect(
      getRenderedText(Number, {
        text: {
          numSelected: 2,
          numShouldBe: 3,
        },
      })
    ).to.equal('3');
  });

  it('displays the invalid style if the number of selected tents is over the shouldBe', () => {
    expect(
      getRenderedClasses(Number, {
        text: {
          numSelected: 4,
          numShouldBe: 3,
        },
      })
    ).to.contain('invalid');
  });

  it('displays the valid style if the number of selected tents is same as shouldBe', () => {
    expect(
      getRenderedClasses(Number, {
        text: {
          numSelected: 4,
          numShouldBe: 4,
        },
      })
    ).to.contain('valid');
  });
});
