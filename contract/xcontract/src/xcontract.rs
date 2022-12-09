#![no_std]

elrond_wasm::imports!();

#[elrond_wasm::contract]
pub trait xcontract {
    #[init]
    fn init(&self, initial_value: BigUint) {
        self.counter().set(initial_value);
    }

    #[view(getCounter)]
    #[storage_mapper("counter")]
    fn counter(&self) -> SingleValueMapper<BigUint>;

    #[endpoint]
    fn increment(&self, value: BigUint) {
        self.counter().update(|counter| *counter += value);
    }

    #[endpoint]
    fn decrement(&self, value: BigUint) {
        self.counter().update(|counter| *counter -= value);
    }
}
